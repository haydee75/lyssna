import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoriesPreview extends Component {
  render() {
    return (
      <section id="features" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-text section-header text-center">
                <div>
                  <h2 className="section-title">Parcourez les catégories</h2>
                  <div className="desc-text">
                    <p>
                      Rendez vous dans la section catégories et parcourez les
                      différentes collections de podcasts.
                      <br />
                      Découvrez les playlists que nous avons sélectionner
                      spécialement pour vous
                      <span>
                        <Link to="/Categories" className="nav-link page-scroll">
                          <i className="lni-chevron-right-circle" />
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row featured-bg">
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("voyages")}
              >
                <div className="feature-item featured-border1">
                  <div className="feature-icon float-left">
                    <i className="lni-pyramids" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Voyages</h4>
                    <p>
                      Même le plus long des voyages
                      <br />
                      commence par un premier pas - <i>Lao Tseu</i>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("sport")}
              >
                <div className="feature-item featured-border2">
                  <div className="feature-icon float-left">
                    <i className="lni-basketball" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Sport</h4>
                    <p>
                      Qui n’a pas d’imagination
                      <br />
                      n’a pas d’ailes - <i>Mohammed Ali</i>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("design")}
              >
                <div className="feature-item featured-border1">
                  <div className="feature-icon float-left">
                    <i className="lni-brush" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Design</h4>
                    <p>
                      Le design c'est la créativité <br />
                      associé à la stratégie - <i>Rob Curedale</i>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("sciences")}
              >
                <div className="feature-item featured-border2">
                  <div className="feature-icon float-left">
                    <i className="lni-microscope" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Sciences</h4>
                    <p>
                      La science consiste à passer <br /> d'un étonnement à un
                      autre - <i>Aristote</i>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("cinéma")}
              >
                <div className="feature-item featured-border3">
                  <div className="feature-icon float-left">
                    <i className="lni-display-alt" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Cinéma et séries</h4>
                    <p>
                      Le cinéma, c’est l’écriture moderne <br />
                      dont l’encre est la lumière - <i>Jean Cocteau</i>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchTopic("geek")}
              >
                <div className="feature-item">
                  <div className="feature-icon float-left">
                    <i className="lni-code-alt" />
                  </div>
                  <div className="feature-info float-left">
                    <h4>Geek</h4>
                    <p>
                      A quoi sert Internet Explorer ?<br />A télécharger Google
                      Chrome !
                    </p>
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

export default CategoriesPreview;
