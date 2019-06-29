import React, { Component, Fragment } from "react";

class Sondage extends Component {
  render() {
    return (
      <Fragment>
        <section id="features" className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="features-text section-header text-center">
                  <div>
                    <h2 className="section-title">Consultez les sondages</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                id="carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel"
                    data-slide-to="0"
                    className="active"
                  />
                  <li data-target="#carousel" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-none d-lg-block">
                      <div className="slide-box">
                        <img
                          src={require("../img/285-200/0.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/285-200/1.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/285-200/2.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/285-200/3.png")}
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                      <div className="slide-box">
                        <img
                          src={require("../img/240-200/0.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/240-200/1.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/240-200/2.png")}
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div className="d-none d-sm-block d-md-none">
                      <div className="slide-box">
                        <img
                          src={require("../img/270-200/0.png")}
                          alt="First slide"
                        />
                        <img
                          src={require("../img/270-200/1.png")}
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div className="d-block d-sm-none">
                      <img
                        className="d-block w-100"
                        src={require("../img/600-400/0.png")}
                        alt="First slide"
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-none d-lg-block">
                      <div className="slide-box">
                        <img
                          src={require("../img/285-200/4.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/285-200/5.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/285-200/6.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/285-200/7.png")}
                          alt="Second slide"
                        />
                      </div>
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                      <div className="slide-box">
                        <img
                          src={require("../img/240-200/3.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/240-200/4.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/240-200/5.png")}
                          alt="Second slide"
                        />
                      </div>
                    </div>
                    <div className="d-none d-sm-block d-md-none">
                      <div className="slide-box">
                        <img
                          src={require("../img/270-200/2.png")}
                          alt="Second slide"
                        />
                        <img
                          src={require("../img/270-200/3.png")}
                          alt="Second slide"
                        />
                      </div>
                    </div>
                    <div className="d-block d-sm-none">
                      <img
                        className="d-block w-100"
                        src={require("../img/600-400/1.png")}
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Sondage;
