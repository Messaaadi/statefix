import React, { Component } from "react";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    show: false,
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>toggle Show</button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;
