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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar">
              <h1>Interviews Reports</h1>
              <Link className="navbar-brand" to="/main">
                Candidates
              </Link>
              <Link className="navbar-brand" to="/login" onClick={logout}>
                Logout
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
