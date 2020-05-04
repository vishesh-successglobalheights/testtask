import React from "react";
import ReactJson from "react-json-view";

class PageTwo extends React.Component {
  render() {
    const { json } = this.props.location.state;
    return (
      <div className="card">
        <ReactJson theme="monokai" src={json} />
      </div>
    );
  }
}
export default PageTwo;
