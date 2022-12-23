import React, { Component } from "react";

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shoesInfo = this.props.info;
    return (
      <>
        <div className="modal fade" id="infoModal" tabIndex={-1} aria-labelledby="infoModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="infoModalLabel">
                  {shoesInfo.name}
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>{shoesInfo.desc}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
