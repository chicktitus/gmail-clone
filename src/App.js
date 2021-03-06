import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import Emaillist from './Emaillist';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />

      <div className="app__body">
      <Sidebar />

      <Switch>
        <Route path="/mail">
          <Mail />
        </Route>
        <Route path="/">
          <Emaillist />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
