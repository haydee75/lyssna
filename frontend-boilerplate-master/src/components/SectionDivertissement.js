import React, { Component } from "react";

class SectionDivertissement extends Component {
  render() {
    return (
      <section id="features" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-text section-header text-center">
                <div>
                  <h2 className="section-title">Divertissements</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row featured-bg">
            <div className="col-lg-6 col-md-6 col-xs-12 p-0 cinema-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("68")}
              >
                <div className="feature-item featured-border1">
                  <h4>
                    <i className="lni-star-filled">&nbsp;</i>
                    Cinéma et séries TV
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 sport-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("77")}
              >
                <div className="feature-item featured-border2">
                  <h4>
                    <i className="lni-basketball">&nbsp;</i>
                    Sport et loisirs
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 game-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("82")}
              >
                <div className="feature-item featured-border1">
                  <h4>
                    <i className="lni-game">&nbsp;</i>
                    Jeux-vidéos
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 auto-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("84")}
              >
                <div className="feature-item featured-border2">
                  <h4>
                    <i className="lni-car">&nbsp;</i>
                    Auto Moto
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 manga-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("83")}
              >
                <div className="feature-item featured-border3">
                  <h4>
                    <i className="lni-image">&nbsp;</i>Manga et animés
                  </h4>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 escape-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("132")}
              >
                <div className="feature-item">
                  <h4>
                    <i className="lni-search">&nbsp;</i>En famille
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

export default SectionDivertissement;
