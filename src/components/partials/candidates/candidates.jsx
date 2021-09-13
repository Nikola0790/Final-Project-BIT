import React, { Fragment } from "react";
import SingleCandidate from "../candidate_single/candidate_single"
import { CandidateReport } from "../candidates_report/candidates_report";

export const Candidates = ({items}) => {
    return (
        <Fragment>
             <SingleCandidate candidate={items}  />
             {/* <CandidateReport candidate={items}/> */}
        </Fragment>
    )
}
export default Candidates