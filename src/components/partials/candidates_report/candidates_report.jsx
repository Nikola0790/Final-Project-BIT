import { useEffect, useState } from "react";
import { getCandidate } from "../../../services/services";

export const CandidateReport = (props) => {
  let idCandidate = props.match.params.id;


  let avatar =
    "https://via.placeholder.com/200/b3b3b3/FFFFFF/?text=Placeholder";
  // let birth = candidate.birthday;
  // let name = candidate.name;
  // let email = candidate.email;
  // let education = candidate.education;

   const [candidateInfo, setCandidateInfo] = useState([]);

  useEffect(() => {
    getCandidate(idCandidate).then((item) => {
      setCandidateInfo(item);
    });
  }, []);
  console.log(candidateInfo);
 
  
  let day = new Date(candidateInfo.birthday).getDate();
  let month = new Date(candidateInfo.birthday).getMonth() + 1;
  let year = new Date(candidateInfo.birthday).getFullYear();
  let dateOfBirth = `${day}-${month}-${year}`;
  return (
    <div>
      <img src={avatar} alt="img of candidate" />
      <div>
        <h3>{candidateInfo.name}</h3>
        <h3>date of birth: {dateOfBirth}</h3>
        <h3>email: {candidateInfo.email}</h3>
        <h3>education: {candidateInfo.education}</h3>
      </div>
    </div>
  );
};
