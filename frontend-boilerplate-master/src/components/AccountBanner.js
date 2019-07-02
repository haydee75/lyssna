import React, { Component, Fragment } from "react";
import cherry from "../img/cherry/cherry-waiting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class AccountBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <section id="business-plan">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
                <div className="business-item-img">
                  <img src={cherry} className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 pl-4">
                <div className="business-item-info">
                  <h3>Invitez vos amis</h3>
                  <p>
                    Partagez l'aventure Lyssna et invitez vos amis à vous
                    rejoindre pour agrandir la communauté !
                    <br />
                    Lyssna propose de découvrir, de noter et d'écrire des
                    critiques de podcasts
                  </p>

                  <div className="inviteBar">
                    <div className="inviteContainer">
                      <input
                        className="invitebar"
                        type="text"
                        placeholder="Entrez une adresse email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <a
                        className="btn-invite"
                        href={
                          "mailto:" +
                          this.state.email +
                          "?subject=Rejoignez%20la%20communauté%20Lyssna&body=Inscrivez-vous%20sans%20plus%20attendre%20et%20découvrez%20les%20dernières%20tendances%20Lyssna%0D%0A%0D%0AA%20très%20bientôt%20sur%20Lyssna%20!%0D%0A%0D%0Ahttps%3A%2F%2Flyssna.herokuapp.com%2F"
                        }
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AccountBanner;
