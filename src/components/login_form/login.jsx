import { useState } from "react";
import { token } from "../../services/services";

export const LoginForm = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const takeEmail = (event) => {
    setEmail(event.target.value);
  };

  const takePass = (event) => {
    setPass(event.target.value);
  };

  // Validation for email and password, save localStorage and set login to true
  const onLogin = (event) => {
    event.preventDefault();
    if (email === "" || pass === "") {
      alert("Please enter a valid email and password");
    }

    token(email, pass).then((item) => {
      if (item === undefined) {
        alert("Please enter a valid email and password");
      }
      localStorage.setItem("nameToken", item);
      setIsLogin(true);
    });
  };

  return (
    <div className="container">
      <form>
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
                required
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
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={onLogin}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
