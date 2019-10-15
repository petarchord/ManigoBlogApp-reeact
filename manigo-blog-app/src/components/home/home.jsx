import React, { Component } from "react";
import Article from "../article/article";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <h3 className="home_title">Welcome to Manigo Blog App</h3>
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}

export default Home;
