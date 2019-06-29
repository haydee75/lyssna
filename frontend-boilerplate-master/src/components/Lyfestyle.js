import React, { Component } from "react";
import religionspiritualite from "../img/cherry/religionspiritualite.png";
import voyage from "../img/cherry/voyage.png";
import modebeaute from "../img/cherry/modebeaute.png";
import bienetre from "../img/cherry/bienetre.png";

class Lyfestyle extends Component {
  render() {
    return (
      <section id="showcase">
        <div className="container-fluid right-position">
          <div className="row gradient-bg">
            <div className="col-lg-12">
              <div className="showcase-text section-header text-center">
                <div>
                  <h2 className="section-title">Playlists Lyfestyle</h2>
                  <br /> <br />
                  <div className="desc-text">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() =>
                              this.props.searchTopic("spiritualite")
                            }
                          >
                            <div className="team-thumb">
                              <img
                                src={religionspiritualite}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Spiritualité</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() => this.props.searchTopic("voyage")}
                          >
                            <div className="team-thumb">
                              <img
                                src={voyage}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Voyage</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() =>
                              this.props.searchTopic("Mode et beauté")
                            }
                          >
                            <div className="team-thumb">
                              <img
                                src={modebeaute}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Mode et beauté</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="single-team">
                          <button
                            className="cursorPointer linkstyle"
                            onClick={() => this.props.searchTopic("Bien être")}
                          >
                            <div className="team-thumb">
                              <img
                                src={bienetre}
                                className="img-fluid img-identites"
                                alt=""
                              />
                            </div>
                          </button>
                          <div className="team-details">
                            <div className="team-inner text-center">
                              <h5 className="team-title">Bien être</h5>
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

export default Lyfestyle;
