import React, { Component } from "react";
import "../index.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <header id="header">
          <div className="container">
            <p className="text-center text-white py-3 fs-4 fw-semibold mb-0">TRY GLASSES APP ONLINE</p>
          </div>
        </header>
      </>
    );
  }
}
