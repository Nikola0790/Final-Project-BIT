import { useEffect, useState } from "react";
import { LoginForm } from "./components/login_form/login";
import { getCandidates } from "./services/services";
import { CandidateReport } from "./components/partials/candidates_report/candidates_report";
import { Header } from "./components/partials/header/header";
import { Footer } from "./components/partials/footer/footer";
import Home from "./components/main_page/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("nameToken")); // Inital state for isLogin is false
  const [candidates, setCandidates] = useState([]);

  // Getting data from api if it's login
  useEffect(() => {
    if (isLogin) {
      getCandidates().then((candidates) => {
        if (
          candidates === "jwt expired" || //  checking if token is expired
          localStorage.getItem("nameToken") === "undefined" // or undefined
        ) {
          localStorage.clear();
          setIsLogin(!!localStorage.getItem("nameToken"));
        } else {
          setCandidates(candidates); // set data for all candidates
        }
      });
    }
  }, [isLogin]);

  return (
    <Router>
      {isLogin && localStorage.getItem("nameToken") !== "undefined" ? ( // isLogin is true and token is valid
        <>
          <Header setIsLogin={setIsLogin} />
          <Switch>
            <Route // send setIsLogin to Header and on click change set isLogin to true
              exact
              path="/candidate_report/:id" // on click on picture in cadidate_single.jsx getting id and sending via props.match... to component CandidateReport
              component={CandidateReport}
            />
            <Route
              exact
              path="/main"
              component={() => <Home candidates={candidates} />} // send all candidates to Home
            />
            <Redirect from="/" to="/main" />
          </Switch>
          <Footer />
        </>
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

export default App;
