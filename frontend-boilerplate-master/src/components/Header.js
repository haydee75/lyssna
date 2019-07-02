import React, { Component, Fragment } from "react";
import ModeEmploi from "./ModeEmploi";
import illu from "../img/cherry-coming-soon.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row space-100">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">Vous aimez les podcasts ?</h2>
                <p>
                  <span className="logo">Lyssna</span> est un service gratuit
                  qui vous permet de découvrir, écouter, noter et classer des
                  millions de podcasts...
                </p>
                <div className="header-button">
                  <button
                    type="button"
                    className="btn btn-border page-scroll"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 p-0">
              <div className="intro-img">
                <img src={illu} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <ModeEmploi />
        </div>
      </Fragment>
    );
  }
}

export default Header;
