import React from "react";

class Home extends React.Component {
 

  render() {
    const { history } = this.props;
    return (
      <div class="card text-white bg-primary">
        <button
          onClick={() => {
            console.log("pressed", this.props);
            history.push({pathname:"/Mainpage"},{data:"vishesh"});
          }}
          className="card border-primary"
        >
          Home Page
        </button>
      </div>
    );
  }
}
export default Home;
