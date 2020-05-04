import React from "react";
import { connect } from "react-redux";
import { GetApiData} from "../store/Actions/systemAction";

let intervalRef = undefined;
class Home extends React.Component {
  componentDidMount() {
    const { GetApiData} = this.props;
  
    intervalRef = setInterval(() => {
      GetApiData(true);
    }, 3000);
  }
  componentWillUnmount() {
    window.clearInterval(intervalRef);
  }
  shouldComponentUpdate(preprops, props) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return true;
    } else {
      return false;
    }
  }
  renderItems = (res) => {
    const { data } = this.props;
    console.log(this.props);
    return (
      <div>
        {data.map((item) => {
          return (
            <div>
              <p>title:{item.title}</p>
              <p>url:{item.url}</p>
              <p>created at:{item.created_at}</p>
              <p>author:{item.author}</p>
            </div>
          );
        })}
      </div>
    );
  };
 
  render() {
    const { history, data } = this.props;
    return (
      <div>
        <div>
          <table className="table table-striped table-dark">
            <thead className="thead-dark">

            <tr>
              <th scope="col">Title</th>
              <th scope="col">URL </th>
              <th scope="col">Created Date</th>
              <th scope="col">Author</th>
            </tr>
            </thead>
            <tbody>

            {data.map((item,key) => {
              return (
                <tr
                key={key}
                onClick={() => {
                  history.push("/Mainpage", { json: item });
                }}
                >
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.created_at}</td>
                  <td>{item.author}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapstatetoprop = (state) => {
   return {
    data: state.APIData.data,
  };
};
export default connect(mapstatetoprop, { GetApiData })(Home);
