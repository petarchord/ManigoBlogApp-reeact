import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import ArticleForm from "./components/article_form/articleForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/addarticle" component={ArticleForm} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
