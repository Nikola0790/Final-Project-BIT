import { useEffect, useState } from "react";
import { LoginForm } from "../login_form/login";
import { getCandidates } from "../../services/services";
import Home from "./home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
export const Main = () => {
  // Inital state for isLogin is false
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("nameToken"));

  useEffect(() => {
    if (isLogin) {
      getCandidates().then((candidates) => {
        console.log(candidates);
      });
    }
  }, [isLogin]);
  console.log(isLogin);
  return (
    <Router>
      {isLogin ? (
        <Switch>
          <Route exact path="/main" component={Home} />
          <Redirect from="/" to="/main" />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <LoginForm setIsLogin={setIsLogin} />} // send function (setIsLogin) to login form via props
          />
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </Router>
  );
};
