import React from "react";
import "./candidate_single.css";
import { Link } from "react-router-dom";

const SingleCandidate = ({ candidate }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <div className="round-img">
          <Link
            to={`/candidate_report/${candidate.id}`}

          >
            <img
              className="card-img-top"

              class="img-fluid"
              src="https://via.placeholder.com/200/b3b3b3/FFFFFF/?text=Placeholder"
              alt="Card image cap"
            />
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">{candidate.name}</h5>
          <p className="card-text">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
