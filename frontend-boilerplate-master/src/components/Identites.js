import React, { Component } from "react";
import genre from "../img/cherry/genre.png";
import feminisme from "../img/cherry/feminisme.png";
import afro from "../img/cherry/afro.png";
import queer from "../img/cherry/queer.png";

class Identites extends Component {
  render() {
    return (
      <section id="showcase">
        <div className="container-fluid right-position">
          <div className="row gradient-bg">
            <div className="col-lg-12">
              <div className="showcase-text section-header text-center">
                <div>
                  <h2 className="section-title">
                    Playslists sur les identités
                  </h2>
                  <br /> <br />
                  <div className="desc-text">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() => this.props.searchTopic("genre")}
                          >
                            <div className="team-thumb">
                              <img
                                src={genre}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Genre</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() =>
                              this.props.searchTopic("afro identités")
                            }
                          >
                            <div className="team-thumb">
                              <img
                                src={afro}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Afro Identités</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() => this.props.searchTopic("féminisme")}
                          >
                            <div className="team-thumb">
                              <img
                                src={feminisme}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Féminisme</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() => this.props.searchTopic("queer")}
                          >
                            <div className="team-thumb">
                              <img
                                src={queer}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Queer</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Identites;
