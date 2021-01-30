import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './comp/Login';
import Signup from './comp/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/Dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/Admin" exact>
            <Admin />
          </Route>
          <Route path="/Login" exact>
            <Login />
          </Route>
        </Switch>
        {/* <LandingPage /> */}
        {/* <Dashboard /> */}
        {/* <Admin /> */}
      </div>
    </Router>
  );
}

export default App;
