import React, { Component } from "react";
import axios from "axios";
import test from "../img/cherry/cherry-welcome.png";

class LastTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    };
  }

  componentDidMount() {
    this.fetchPodcasts();
  }

  fetchPodcasts() {
    axios
      .get("http://localhost:3001/lastTrends")
      .then(response => {
        this.setState({
          podcasts: response.data.podcasts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <section id="showcase">
        <div className="container-fluid right-position">
          <div className="row gradient-bg">
            <div className="col-lg-12">
              <div className="showcase-text section-header text-center">
                <div>
                  <h2 className="section-title title-tendance">
                    Dernières tendances
                  </h2>

                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="img-car" src={test} alt="First slide" />
                        <br />
                        <div className="hover-content text-center">
                          <div className="fancy-table">
                            <div className="table-cell">
                              <div className="single-text">
                                <br />
                                <h3 className="decouvrez">
                                  Découvrez les podcasts <br />
                                  les plus populaires du moment
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.state.podcasts.map(p => (
                        <div className="carousel-item " key={p.id}>
                          <div className="screenshot-thumb">
                            <img
                              src={p.image}
                              className="img-fluid img-car"
                              alt={p.name}
                            />
                            <div className="hover-content text-center">
                              <div className="fancy-table">
                                <div className="table-cell">
                                  <div className="single-text">
                                    <p>{p.publisher}</p>
                                    <h5>{p.title}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
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
                      href="#carouselExampleControls"
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LastTrends;
