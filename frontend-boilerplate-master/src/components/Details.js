import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <section id="services" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="services-item text-center">
                <div className="icon">
                  <i className="lni-island" />
                </div>
                <h4>Où que vous soyez</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="services-item text-center">
                <div className="icon">
                  <i className="lni-gift" />
                </div>
                <h4>Des milliers de podcasts</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="services-item text-center">
                <div className="icon">
                  <i className="lni-emoji-cool" />
                </div>
                <h4>Personnalisés</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
