import React, { Fragment } from "react";
import SingleCandidate from "../candidate_single/candidate_single"

export const Candidates = ({items}) => {
    console.log(items)
    return (
        <Fragment>
            
             <SingleCandidate candidate={items}  />
        
    </Fragment>
    )
}
export default Candidates