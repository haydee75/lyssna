import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section id="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="footer-logo">
                  <h1 className="footer-title">Lyssna</h1>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Suivez nous</h3>
                  <ul className="menu">
                    <li>
                      <p>
                        <i className="lni-facebook-filled" />
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="lni-twitter-filled" />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Produit</h3>
                  <ul className="menu">
                    <li>
                      <p>Service Client</p>
                    </li>
                    <li>
                      <p>FAQ</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Newsletter</h3>
                  <div className="subscribe-area">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Inscrire votre email"
                    />
                    <span>
                      <i className="lni-chevron-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="site-info text-center">
                    <span>Développé par Haydée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
