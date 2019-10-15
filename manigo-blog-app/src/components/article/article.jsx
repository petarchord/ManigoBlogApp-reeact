import React, { Component } from "react";

class Article extends Component {
  state = {};
  render() {
    return (
      <div className="article_holder">
        <div class="card" style={{ width: 18 + "em" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Like
            </a>
            <a href="#" class="card-link">
              Comment
            </a>
            <p className="article_like">5 likes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
