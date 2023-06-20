import React, { Component } from "react";
import glassData from "./dataGlasses.json";
import "../index.css";

export default class Content extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "A stemmed glass with a slender bowl and a wide rim. It is typically used for serving cocktails that are served up (without ice).",
  };

  changeGlass = (item) => {
    this.setState({
      id: item.id,
      price: item.price,
      name: item.name,
      url: item.url,
      desc: item.desc,
    });
  };

  render() {
    return (
      <>
        <div className="container position-relative">
          <div className="content__top d-flex justify-content-center align-items-center py-5">
            <div className="content__info text-white">
              <h2>Brief Details</h2>
              <table cellPadding={10}>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{this.state.name}</td>
                  </tr>
                  <tr>
                    <td valign="top">Description</td>
                    <td>{this.state.desc}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>${this.state.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content__image text-center position-relative">
              <img src="./glassesImage/model.jpg" alt="Model" />
              <img src={this.state.url} alt="Glass Overlay" />
            </div>
          </div>
          <div className="content__glasses bg-light px-5 pt-5">
            <div className="row">
              {glassData.map((item, index) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-5" key={index}>
                    <div
                      className={`glasses__item p-3 border border-2 w-75 text-center mx-auto bg-white ${
                        item.url === this.state.url ? "active" : ""
                      }`}
                      onClick={() => {
                        this.changeGlass(item);
                      }}
                    >
                      <img
                        src={item.url}
                        alt={`Glass Pic ${item.id}`}
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
