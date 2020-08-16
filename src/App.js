import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/style.scss";
import "./App.css";
import * as routes from "./routePaths";
import Homepage from "./components/Homepage/Homepage";
import ResumePage from "./components/ResumePage/ResumePage";

function App(props) {

  return (
    <div className="App" id="home">
      <Switch>
        <Route exact path={routes.homepage} component={Homepage} />
        <Route exact path={routes.resume} component={ResumePage} />
      </Switch>
    </div>
  );
}

export default App;
