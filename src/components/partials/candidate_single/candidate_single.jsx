import React from "react";
import "./candidate_single.css"
const SingleCandidate = ({candidate}) => {

  return (
    <div className="col-md-3">

        <div className="card">
            <div className="round-img">
                <img className="card-img-top"class="rounded-circle"
                src="https://via.placeholder.com/200/b3b3b3/FFFFFF/?text=Placeholder" alt="Card image cap"/>
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
