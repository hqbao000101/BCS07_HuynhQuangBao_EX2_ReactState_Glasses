import React, { Component } from "react";
import "../index.css";

export default class Content extends Component {
  glass_arr = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"];

  state = {
    img: "v1",
  };

  changeGlass = (item) => {
    this.setState({
      img: item,
    });
  };

  render() {
    return (
      <>
        <div className="container position-relative">
          <div className="content__image text-center mb-4 position-relative">
            <img src="./glassesImage/model.jpg" alt="" className="w-25" />
            <img
              src={`./glassesImage/${this.state.img}.png`}
              alt="Glass Overlay"
            />
          </div>
          <div className="content__glasses bg-light px-5 pt-5">
            <div className="row">
              {this.glass_arr.map((item, index) => {
                return (
                  <div className="col-4 mb-5" key={index}>
                    <div
                      className={`glasses__item p-3 border border-2 w-75 text-center mx-auto bg-white ${item === this.state.img ? "active" : ""}`}
                      onClick={() => {
                        this.changeGlass(item);
                      }}
                    >
                      <img
                        src={`./glassesImage/${item}.png`}
                        alt={`Glass Pic ${index + 1}`}
                        className="w-50"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
