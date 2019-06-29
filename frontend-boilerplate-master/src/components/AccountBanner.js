import React, { Component, Fragment } from "react";
import cherry from "../img/cherry/cherry-waiting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class AccountBanner extends Component {
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptatevelit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>

                  <div className="inviteBar">
                    <div className="inviteContainer">
                      <input
                        className="invitebar"
                        type="text"
                        placeholder="Entrez une adresse email"
                      />

                      <button className="btn-invite">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
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
