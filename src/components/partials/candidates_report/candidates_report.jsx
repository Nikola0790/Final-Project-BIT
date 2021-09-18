import { useEffect, useState, Fragment } from "react";
import {
  getBirthDate,
  getCandidate,
  getInterviewDate,
  getReport,
} from "../../../services/services";
import { TableReport } from "./tableReport";

import "./candidates_report.css";

// Creating candidate info
export const CandidateReport = (props) => {
  let idCandidate = props.match.params.id;
  let avatar =
    "https://via.placeholder.com/350x250/b3b3b3/FFFFFF/?text=Placeholder";

  const [candidateInfo, setCandidateInfo] = useState([]);
  const [candidateReport, setCandidateReport] = useState([]);
  const [birthDate, setBirthDate] = useState("");
  const [interviewDate, setInterviewDate] = useState([]);

  useEffect(() => {
    // getting single candidate via id
    getCandidate(idCandidate).then((item) => {
      setCandidateInfo(item);
    });
    // getting formated birthday
    getBirthDate(idCandidate).then((item) => {
      setBirthDate(item);
    });
  }, []);

  useEffect(() => {
    // getting report for all candidates
    getReport().then((item) => {
      setCandidateReport(item);
    });
    // getting formated interview date
    getInterviewDate(idCandidate).then((item) => {
      setInterviewDate(item);
    });
  }, []);

  // filtering data for selected candidate
  let singleReport = candidateReport.filter((report) => {
    if (parseInt(idCandidate) === report.candidateId) {
      return report;
    }
  });

  return (
    <Fragment>
      <div className="container">
        <div className="row candidate">
          <div className="col-lg-4 col-md-12 candidateImage">
            <img
              src={avatar}
              className="img-thumbnail"
              alt="img of candidate"
            />
          </div>
          <div className="col-lg-8 col-md-12 candidateInfo">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <p className="infoQuestion">Name:</p>
                <p className="infoAnswer">{candidateInfo.name}</p>
              </div>
              <div className="col-md-5 col-sm-12">
                <p className="infoQuestion">Date of birth:</p>
                <p className="infoAnswer">{birthDate}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <p className="infoQuestion">Email:</p>
                <p className="infoAnswer">{candidateInfo.email}</p>
              </div>
              <div className="col-md-5 col-sm-12">
                <p className="infoQuestion">Education: </p>
                <p className="infoAnswer">{candidateInfo.education}</p>
              </div>
            </div>
          </div>
        </div>
        {/* sending data to TableReport */}
        <TableReport
          singleReport={singleReport}
          interviewDate={interviewDate}
        />
      </div>
    </Fragment>
  );
};
