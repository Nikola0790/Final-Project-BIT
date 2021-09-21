import "./modal.css";
export const Modal = ({ data, index, interviewDate}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            data-toggle="modal"
            data-target={`#mymodal${index}`} // data-target must match with id
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
                          <div className="col-12">
                            <p className="question">Company</p>
                          </div>
                          <div className="col-12 ">
                            <p className="answer">{data.companyName}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question"> Interview date</p>
                          </div>
                          <div className="col-12">
                            <p className="answer">{interviewDate}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Phase</p>
                          </div>
                          <div className="col-12">
                            <p className="answer">{data.phase}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Status</p>
                          </div>
                          <div className="col-12">
                            <p className="answer">{data.status}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Notes</p>
                          </div>
                          <div className="col-12">
                            <p className="note">{data.note}</p>
                          </div>
                        </div>
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
