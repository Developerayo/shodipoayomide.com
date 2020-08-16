import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/style.scss";
import "./App.css";
import * as routes from "./routePaths";
import Homepage from "./components/Homepage/Homepage";
import ResumePage from "./components/ResumePage/ResumePage";

function App(props) {
  const { pathname, hash } = useLocation();
  console.log(hash);
  console.log(props);
  useEffect(() => {
    if (!hash || pathname === "/resume") {
      document.body.scrollTop = 0;
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            offset: "-120",
            block: "start"
          });
        }
      }, 0);
    }
  }, [pathname, hash]);
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
