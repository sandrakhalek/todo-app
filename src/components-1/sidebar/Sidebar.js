import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from "../../Pages/Tasks";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <Router>
      <nav className="sidebar">
        <h1 className="row aic bottom-space-md primary-heading">My TODOs</h1>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </Router>
  );
}

export default Sidebar;
