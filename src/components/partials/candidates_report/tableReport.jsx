import { Fragment } from "react";
import { Modal } from "../modal/modal";
import "./tableReport.css";

// create info table for single candidate
export const TableReport = ({ singleReport, interviewDate}) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Reports</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Interview Date</th>
                  <th scope="col" colSpan="2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleReport.map((item, index) => {

                  // getting data from singleReport
                  return (
                    <tr key={item.id}>
                      <td>{item.companyName}</td>
                      <td>{interviewDate[index]}</td>
                      <td>{item.status}</td>
                      <th scope="row" width="10%">
                        <Modal // additional info for selected interview
                          data={item}
                          index={index}
                          interviewDate={interviewDate[index]}
                        />
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
