import React from "react";




export const CandidateReport = ({candidate}) => {

    let day = new Date(candidate.birthday).getDate();
    let month = new Date(candidate.birthday).getMonth() + 1;
    let year = new Date(candidate.birthday).getFullYear();
    let dateOfBirth = `${day}-${month}-${year}`;
    return (
        <div className>
            <img src={candidate.avatar} alt="img of candidate" />
            <div >
                <h3>{candidate.name}</h3>
                <h3>date of birth: {dateOfBirth}</h3>
                <h3>email: {candidate.email}</h3>
                <h3>education: {candidate.educataion}</h3>
            </div>
        </div>
    )
}







