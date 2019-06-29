import React, { Component } from "react";

class Sciences extends Component {
  render() {
    return (
      <section id="features" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-text section-header text-center">
                <div>
                  <h2 className="section-title">Sciences et techniques</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row featured-bg">
            <div className="col-lg-6 col-md-6 col-xs-12 p-0 escape-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("107")}
              >
                <div className="feature-item featured-border1">
                  <h4>
                    <i className="lni-stethoscope">&nbsp;</i>
                    Médecine
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 sport-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("110")}
              >
                <div className="feature-item featured-border2">
                  <h4>
                    <i className="lni-bug">&nbsp;</i>
                    Sciences naturelles
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 medcine-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("108")}
              >
                <div className="feature-item featured-border1">
                  <h4>
                    <i className="lni-users">&nbsp;</i>
                    Sciences sociales
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 game-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("131")}
              >
                <div className="feature-item featured-border2">
                  <h4>
                    <i className="lni-laptop-phone">&nbsp;</i>
                    Technologie
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 manga-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("140")}
              >
                <div className="feature-item featured-border3">
                  <h4>
                    <i className="lni-code">&nbsp;</i>
                    Tendances Web
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 escape-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("116")}
              >
                <div className="feature-item">
                  <h4>
                    <i className="lni-comment-alt">&nbsp;</i>
                    Langues
                  </h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sciences;
