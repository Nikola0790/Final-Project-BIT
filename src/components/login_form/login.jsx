import { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";
import { token } from "../../services/services";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //const history = useHistory();
  /* const redirect = (event) => {
    event.preventDefault();
    history.push("/main"); 
  }; */

  const takeEmail = (event) => {
    setEmail(event.target.value);
  };

  const takePass = (event) => {
    setPass(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const onLogin = () => {
    console.log("CAO");
    token(email, pass).then((tok) => {
      console.log(tok);
      localStorage.setItem("nameToken", tok);
      //history.push("/main");
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={takeEmail}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={pass}
                onChange={takePass}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              /* onClick={redirect} */
              type="submit"
              className="btn btn-primary"
              onClick={onLogin}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
