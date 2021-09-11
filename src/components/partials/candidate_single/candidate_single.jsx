import React from "react";
import "./candidate_single.css"
const SingleCandidate = ({candidate}) => {

  return (
    <div className="col-md-4">

        <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{candidate.name}</h5>
                <p className="card-text">{candidate.email}</p>  
            </div>
        </div>
    </div>
  );
};

export default SingleCandidate;
