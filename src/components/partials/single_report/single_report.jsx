export const Modal = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#mymodal"
          >
            eye
          </button>
          <div className="modal fade" id="mymodal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3></h3>
                </div>
                <div className="modal-body">
                  <p>Some content goes in here</p>
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
