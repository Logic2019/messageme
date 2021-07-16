import "./App.css"
import React from "react";
import { Route,
BrowserRouter as Router,Switch } from "react-router-dom";
// import  Login from "./components/login/Login";
import  LoginButton from "./components/LoginButton";
import  Loginout from "./components/Logout";
import { useAuth0 } from "@auth0/auth0-react";




import Home from "./Home";

function App() {
  const { user } = useAuth0();

  return (
        <div>
          <Router>
        <Switch>
        <Route exact path="/">
          {user ? <Home/> : <><LoginButton /><Loginout/></>}
        </Route>       
        </Switch>
        </Router>
      </div>
  );
  
};

export default App;