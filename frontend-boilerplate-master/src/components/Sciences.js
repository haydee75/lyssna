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
                  <h2 className="section-title">
                    Podcasts Sciences et techniques
                  </h2>
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
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-stethoscope" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Médecine</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 sport-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("110")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-bug" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Sciences naturelles</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 medecine-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("108")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-users" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Sciences sociales</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 game-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("131")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-laptop-phone" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Technologie</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 manga-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("140")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-code" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Tendances Web</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 escape-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("116")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-comment-alt" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Langues</h4>
                  </div>
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
