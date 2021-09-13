import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCandidates } from "../../../services/services";




export const CandidateReport = (props) => {
    let id = props.match.params.id;
    const [candidateInfo, setCandidateInfo] = useState ([]);
    
    useEffect(() => {
        getCandidates().then((candidates) => {
            setCandidateInfo(candidates);
        }) 
    }, []);
    console.log(candidateInfo)

    let candidateData = candidateInfo.filter((item)=>{
        if(item.id === id) {
            return item
        }

    })
    let day = new Date(candidateData.birthday).getDate();
    let month = new Date(candidateData.birthday).getMonth() + 1;
    let year = new Date(candidateData.birthday).getFullYear();
    let dateOfBirth = `${day}-${month}-${year}`;
    return (
        
        <div>
            <img src={candidateData.avatar} alt="img of candidate" />
            <div >
                <h3>{candidateData.name}</h3>
                <h3>date of birth: {dateOfBirth}</h3>
                <h3>email: {candidateData.email}</h3>
                <h3>education: {candidateData.educataion}</h3>
            </div>
        </div>
    )
}







