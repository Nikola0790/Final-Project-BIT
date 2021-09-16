import { Fragment } from "react";

export const TableReport = ({ dataReport }) => {
  return (
    <Fragment>
      <h3>Reports</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Interview Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {dataReport.map((item) => {
            return (
              <tr>
                <td>{item.companyName}</td>
                <td>{item.interviewDate}</td>
                <td>{item.status}</td>
                <th scope="row">eye</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
