import {DATAACTION} from "../Constants"
const intialstate = {
  data:[]
};

let DataReducer = (state = intialstate, action) => {
  switch (action.type) {
    case DATAACTION:{
      let data =state.data.concat(action.payload)
      return{...state,data:data}
    }
    default:
      return { ...state };
  }
};

export default DataReducer;
