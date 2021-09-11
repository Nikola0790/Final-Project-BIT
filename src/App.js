import { Fragment, useEffect, useState, useMemo } from "react";
import { LoginForm } from "./components/login_form/login";
import { Main } from "./components/main_page/main_page";
import { getCandidates, token } from "./services/services";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useNavigation,
} from "react-router-dom";

function App() {
  //const [isLogin, setIsLogin] = useState(!!localStorage.getItem("nameToken"));
  const loginStatus = !!localStorage.getItem("nameToken");
  const isLogin = useMemo(() => {
    return loginStatus;
  }, [loginStatus]);

  useEffect(() => {
    if (isLogin) {
      getCandidates().then((res) => {
        console.log(res);
      });
    }
  }, [isLogin]);
  console.log(isLogin);
  return (
    <Router>
      {isLogin ? (
        <Switch>
          <Route exact path="/main" component={Main} />
          <Redirect from="/" to="/main" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </Router>
  );
}

export default App;
