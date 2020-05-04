import React from "react";

class PageTwo extends React.Component {
  render() {
      console.log("onpage two",this.props)
    return (
      <div class="card text-white bg-primary">
        <button className="card border-primary">pageTwo</button>
      </div>
    );
  }
}
export default PageTwo;
