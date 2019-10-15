import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import ArticleForm from "./components/article_form/articleForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/addarticle" component={ArticleForm} />
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
