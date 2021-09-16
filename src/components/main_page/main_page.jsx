import { useEffect, useState } from "react";
import { LoginForm } from "../login_form/login";
import { getCandidates, getCandidate } from "../../services/services";
import { CandidateReport } from "../partials/candidates_report/candidates_report";


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
  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState("");

  useEffect(() => {
    if (isLogin) {
      getCandidates().then((candidates) => {
        setCandidates(candidates);
        console.log(candidates)
      getCandidate().then((candidate)=>{
        setCandidate(candidate)
      })
      });
    }
  }, [isLogin]);

  return (
    <Router>
      {isLogin ? (
        <Switch>
          <Route
            exact
            path="/candidate_report/:id"
            component={CandidateReport}
          />
          <Route
            exact
            path="/main"
            component={() => <Home setCandidates={candidates} />}
          />
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
