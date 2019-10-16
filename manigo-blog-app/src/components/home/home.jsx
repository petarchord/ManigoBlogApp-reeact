import React, { Component } from "react";
import Article from "../article/article";
import Navbar from "./navbar";
import { utility } from "../../helpers/utility";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
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
        {this.props.articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            content={article.content}
            username={article.username}
            likes={article.likes}
            comments={article.comments}
          />
        ))}
        {/* <Article />
        <Article />
        <Article /> */}
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
    fetchArticles: data => dispatch(actionCreator.fetchArticles(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Home);
