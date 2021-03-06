import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './globalStyles.scss'
import './App.scss';

import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
