import {DATAACTION} from "../Constants"

export const GetApiData = () => {
  return (dispatch) => {
    _getapidata(dispatch);
  };
};

//internal functions
let page = 0;
const GETAPicall = (dispatch) => {
  fetch(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,

    { method: "GET" }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let data = res.hits;
      dispatch({
        type: DATAACTION,
        payload: data,
      });
    });
  page = page + 1;
};


const _getapidata = (dispatch) => {
  GETAPicall(dispatch);
};
