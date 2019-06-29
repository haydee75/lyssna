import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                      <Link to="www.google.com">
                        <i className="lni-facebook-filled" />
                      </Link>
                    </li>
                    <li>
                      <Link to="www.google.com">
                        <i className="lni-twitter-filled" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Produit</h3>
                  <ul className="menu">
                    <li>
                      <Link to="www.google.com">Service Client</Link>
                    </li>
                    <li>
                      <Link to="www.google.com">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Application</h3>
                  <ul className="menu">
                    <li>
                      <Link to="www.google.com">Android</Link>
                    </li>
                    <li>
                      <Link to="www.google.com">IOS</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Souscrire</h3>
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
