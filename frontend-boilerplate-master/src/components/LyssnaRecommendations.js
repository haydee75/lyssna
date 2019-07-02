import React, { Component } from "react";
import test from "../img/cherry/cherry-done.png";
import axios from "axios";
import LyssnaRecommandationCard from "./LyssnaRecommandationCard";

class LyssnaRecommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      playlist: []
    };
  }

  componentDidMount() {
    this.fetchPlaylist();
  }

  fetchPlaylist() {
    axios
      .get(
        process.env.REACT_APP_HOST_API + "/playlist/5d1b1bb7ce06170017114705"
      )
      .then(response => {
        this.setState({
          playlist: response.data
        });
      });
  }

  render() {
    return (
      <section id="showcase">
        <div className="container-fluid right-position">
          <div className="row lyssna-reco">
            <div className="col-lg-12">
              <div className="showcase-text section-header text-center">
                <div>
                  <h2 className="section-title title-black">
                    Sélection Lyssna
                  </h2>

                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner carousel-lyssnareco">
                      <div className="carousel-item active">
                        <img className="img-car" src={test} alt="First slide" />
                        <br />
                        <div className="hover-content text-center">
                          <div className="fancy-table">
                            <div className="table-cell">
                              <div className="single-text">
                                <br />
                                <h3 className="decouvrez">
                                  Notre playlist concocté avec amour
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.state.playlist.map(p => (
                        <LyssnaRecommandationCard
                          key={p.id}
                          title_original={p.title_original}
                          image={p.image}
                          audio={p.audio}
                        />
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon red-control"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon red-control"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
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

export default LyssnaRecommendations;
