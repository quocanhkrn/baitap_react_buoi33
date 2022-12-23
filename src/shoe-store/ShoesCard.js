import React, { Component } from "react";

export default class ShoesCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shoes = this.props.shoes;
    return (
      <div className="col-12 col-md-4 col-xl-3">
        <div className="card">
          <img src={shoes.image} alt="" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title m-0 text-truncate lh-1">{shoes.name}</h5>
            <h3 className="card-text my-2">${shoes.price}</h3>
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#infoModal"
              onClick={() => {
                this.props.getInfo(shoes.name, shoes.description);
              }}>
              <i className="fa-solid fa-magnifying-glass me-2"></i>
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
