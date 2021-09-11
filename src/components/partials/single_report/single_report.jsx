export const Modal = ({ data }) => {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{data.name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <p>info</p>
            </div>
            <div>
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
