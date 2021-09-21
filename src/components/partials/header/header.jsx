import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ setIsLogin }) => {
  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <h1 >Interviews Reports</h1>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link to="/main" className="navbar-brand" >
              Candidates
            </Link>
              <Link to="/login" className="navbar-brand" onClick={logout}>
              Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
