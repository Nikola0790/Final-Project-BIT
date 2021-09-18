import { Fragment } from "react";
import { Modal } from "../single_report/single_report";
import "./tableReport.css";

export const TableReport = ({ dataReport }) => {
  console.log(dataReport);
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
            <table class="table table-striped">
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
                {dataReport.map((item, index) => {
                  let day = new Date(item.interviewDate).getDate();
                  let month = new Date(item.interviewDate).getMonth() + 1;
                  let year = new Date(item.interviewDate).getFullYear();
                  let dateOfBirth = `${day}.${month}.${year}`;
                  return (
                    <tr>
                      <td>{item.companyName}</td>
                      <td>{dateOfBirth}</td>
                      <td>{item.status}</td>
                      <th scope="row">
                        <Modal data={item} index={index} />
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
