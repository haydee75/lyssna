import React, { Component, Fragment } from "react";
import cherry from "../img/cherry/cherry-list-is-empty.png";
//import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser
    };
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          <div className="container">
            <div className="row space-100">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="contents">
                  <h2 className="head-title">Mon compte</h2>
                  <div>
                    <p>
                      Pseudo -
                      {this.props.currentUser &&
                        this.props.currentUser.fullName}
                    </p>
                    <p>
                      Email -{" "}
                      {this.props.currentUser && this.props.currentUser.email}
                    </p>
                    <p>Mot de passe - ************</p>
                  </div>
                  <div className="header-button">
                    <button
                      type="button"
                      className="btn btn-border page-scroll"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 p-0">
                <div className="intro-img">
                  <img src={cherry} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
