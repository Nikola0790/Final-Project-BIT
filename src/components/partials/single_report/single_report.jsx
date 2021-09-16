export const Modal = ({ data, index }) => {
  let split = data.interviewDate.split(" ", 6);
  console.log(split);
  let date = `${split[2]}.${split[1]}.${split[3]}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#mymodal${index}`}
          >
            <i className="material-icons"> visibility </i>
          </button>
          <div className="modal fade" id={`mymodal${index}`}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>{data.candidateName}</h3>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <div className="row">
                          <p>Company</p>
                          <p>{data.companyName}</p>
                        </div>
                        <div className="row">
                          <p>Interview date</p>
                          <p>{date}</p>
                        </div>
                        <div className="row">
                          <p>Phase</p>
                          <p>{data.phase}</p>
                        </div>
                        <div className="row">
                          <p>Status</p>
                          <p>{data.status}</p>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>Notes</p>
                        <p>{data.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
