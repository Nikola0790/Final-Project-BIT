import React from "react";
import "./header.css"

export const Header = () =>{
    return (
      <header>
        <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar">
                  <div className="container">
                  <h1>
                      Interviews Reports
                      </h1>
                    <a className="navbar-brand" href="#">
                      Candidates
                    </a>
                  </div>
                </nav>
              </div>
            </div>
        </div>
      </header>
      );
    };
  