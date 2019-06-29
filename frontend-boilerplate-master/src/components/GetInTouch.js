import React, { Component } from "react";
import illu from "../img/cherry/cherry-message-sent.png";

class GetInTouch extends Component {
  render() {
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-text section-header text-center">
                <div>
                  <h2 className="section-title">Des suggestions ?</h2>
                  <div className="desc-text">
                    <p>
                      Vous ne trouvez pas un podcast dans la bibliothèque
                      Lyssna,
                    </p>
                    <p>envoyez nous vos suggestions dès maintenant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        name="nom"
                        placeholder="Nom"
                        required
                        data-error="Veuillez renseignez votre Nom"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        className="form-control"
                        name="email"
                        required
                        data-error="Veuillez renseignez l'email'"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="url_podcast"
                        name="url_podcast"
                        placeholder="Url du podcast"
                        rows="4"
                        data-error="Veuillez renseignez l'URL"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="submit-button">
                      <button
                        className="btn btn-common"
                        id="submit"
                        type="submit"
                      >
                        Envoyer
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-4 col-md-12">
              <div className="contact-img">
                <img src={illu} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </section>
    );
  }
}

export default GetInTouch;
