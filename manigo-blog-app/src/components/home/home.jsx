import React, { Component } from "react";
import Article from "../article/article";
import Navbar from "./navbar";
import { utility } from "../../helpers/utility";
import { connect } from "react-redux";
import axios from "axios";

class Home extends Component {
  state = {};

  componentDidMount() {
    axios({
      method: "get",
      url: utility.baseUrl,
      headers: {
        "Content-Type": "aplication/json"
      }
    })
      .then(res => {
        console.log("response in home:", res);
        if (res.data) {
          this.props.fetchArticles(res.data);
        }
      })
      .catch(err => console.log("error in home:", err));
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    articles: store.articleReducer.state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: data => dispatch({ type: "FETCH_ARTICLES", payload: data })
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Home);
