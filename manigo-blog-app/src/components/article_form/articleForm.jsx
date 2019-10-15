import React, { Component } from "react";
import Navbar from "../home/navbar";

class ArticleForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <form className="articleform_holder">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter title here"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Content</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Publish
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ArticleForm;
