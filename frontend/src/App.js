import "./app.css"
import React from "react";
import { Route,Switch } from "react-router-dom";

import Home from "./Home";

const App = () => {

   
 
  return (
    <div id="app" className="d-flex flex-column h-100">

      <div className="container flex-grow-1">
        <Switch>
        <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;