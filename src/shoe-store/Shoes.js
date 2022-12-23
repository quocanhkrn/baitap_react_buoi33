import React, { Component } from "react";
import shoeData from "./data.json";
import ShoesCard from "./ShoesCard";
import InfoModal from "./InfoModal";

export default class Shoes extends Component {
  constructor(props) {
    super(props);
    this.SHOE_DATA = shoeData;
    this.state = {
      infoModal: { name: "", desc: "" },
    };
  }

  render() {
    const shoesInfo = this.state.infoModal;
    return (
      <div className="wrapper row g-3">
        {this.SHOE_DATA.map((shoes) => {
          return (
            <ShoesCard
              key={shoes.id}
              shoes={shoes}
              getInfo={(name, desc) => {
                let infoModal = { name, desc };
                this.setState({ infoModal });
              }}
            />
          );
        })}
        <InfoModal info={shoesInfo} />
      </div>
    );
  }
}
