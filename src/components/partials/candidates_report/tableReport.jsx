import { Fragment } from "react";
import { Modal } from "../single_report/single_report";

export const TableReport = ({ dataReport }) => {
  console.log(dataReport);
  return (
    <Fragment>
      <h3>Reports</h3>
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
            return (
              <tr>
                <td>{item.companyName}</td>
                <td>{item.interviewDate}</td>
                <td>{item.status}</td>
                <th scope="row">
                  <Modal data={dataReport[index]} index={index} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
