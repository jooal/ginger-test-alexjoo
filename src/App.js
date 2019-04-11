import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Articles from './components/pages/Articles';
import Authors from './components/pages/Authors';

// const Api_Key = "";
// const url = "http://export.arxiv.org/api/query?search_query=all:psychiatry+AND+all:therapy+AND+all:datascience+AND+all:machinelearning&sortBy=submittedDate&sortOrder=ascending";


class App extends Component {
 

  
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path = "/" component = {Articles}></Route>
        <Route exact path = "/authors" component = {Authors}></Route>


      </div>
      </Router>
    );
    
  }
}

export default App;
