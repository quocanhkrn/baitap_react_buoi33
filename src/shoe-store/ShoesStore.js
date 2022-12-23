import React, { Component } from "react";
import "./style.css";
import Shoes from "./Shoes";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="brand my-3 text-center">• SHOES STORE •</h1>
          <Shoes />
        </div>
      </>
    );
  }
}
