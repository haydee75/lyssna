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
                  <h2 className="section-title">
                    Podcasts sur le divertissement
                  </h2>
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
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-star" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Cinéma et séries TV</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 sport-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("77")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-basketball" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Sport et loisirs</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 medecine-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("82")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-game" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Jeux-vidéos</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 escape-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("84")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-car" />
                  </div>
                  <div className="feature-info">
                    <br />
                    <br />
                    <h4>Auto Moto</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 auto-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("83")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-reddit" />
                  </div>
                  <div className="feature-image">
                    <br />
                    <br />
                    <h4>Manga et animés</h4>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0 game-Box">
              <button
                className="cursorPointer linkstyle"
                onClick={() => this.props.searchGenre("132")}
              >
                <div className="feature-item featured-border1">
                  <div className="lniBWhite feature-icon float-left">
                    <i className="lni-users lniWi" />
                  </div>
                  <div className="feature-image">
                    <br />
                    <br />
                    <h4>En famille</h4>
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

export default SectionDivertissement;
