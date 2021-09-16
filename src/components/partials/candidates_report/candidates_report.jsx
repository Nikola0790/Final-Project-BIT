import { useEffect, useState } from "react";
import { getCandidate, getReport } from "../../../services/services";
import { TableReport } from "./tableReport";

export const CandidateReport = (props) => {
  let idCandidate = props.match.params.id;
  let avatar =
    "https://via.placeholder.com/200/b3b3b3/FFFFFF/?text=Placeholder";

  const [candidateInfo, setCandidateInfo] = useState([]);
  const [candidateReport, setCandidateReport] = useState([]);

  useEffect(() => {
    getCandidate(idCandidate).then((item) => {
      setCandidateInfo(item);
    });
  }, []);

  useEffect(() => {
    getReport().then((item) => {
      setCandidateReport(item);
    });
  }, []);

  let singleReport = candidateReport.filter((report) => {
    if (idCandidate == report.candidateId) {
      return report;
    }
  });

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
      <TableReport dataReport={singleReport} />
    </div>
  );
};
