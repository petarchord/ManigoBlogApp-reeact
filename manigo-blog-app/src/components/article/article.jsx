import React, { Component } from "react";

class Article extends Component {
  state = {};
  render() {
    return (
      <div className="article_holder">
        <div class="card" style={{ width: 18 + "em" }}>
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.props.username}</h6>
            <p class="card-text">{this.props.content}</p>
            <a href="#" class="card-link">
              Like
            </a>
            <a href="#" class="card-link">
              Comment
            </a>
            <p className="article_like">{this.props.likes}likes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
