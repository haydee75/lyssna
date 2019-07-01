import React, { Component, Fragment } from "react";
//import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import illu from "../../img/cherry/sign-up-3.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // these are req.body.name of each input field in the form
      fullName: "",
      email: "",
      originalPassword: "",
      message: null
    };
  }
  // 🎯 you can reuse this for every React form
  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        process.env.REACT_APP_HOST_API + "/api/signup", // 1st and mandatory: which route I'm hitting in the backend
        this.state, // 2nd and mandatory: what I'm sending (since it's POST route I have to send something)
        { withCredentials: true } // 3rd and optional: credentials:true in CORS
      )
      .then(responseFromServer => {
        // console.log("response is: ", responseFromServer);
        const { userDoc } = responseFromServer.data;
        this.props.onUserChange(userDoc);
      })
      .catch(err => {
        // console.log("error while signup: ", err);
        if (err.response && err.response.data) {
          return this.setState({ message: err.response.data.message });
        }
      });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section>
          <h2> You are signed up! </h2>
          <p>
            {" "}
            Welcome, {this.props.currentUser.fullName}! Your email is:{" "}
            <b> {this.props.currentUser.email} 🙈 </b>
          </p>
        </section>
      );
    }

    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          {/* <Navbar /> */}
          <div className="container">
            <div className="row space-100">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="contents">
                  <h2 className="head-title">Inscrivez vous</h2>
                  <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                      <p>Pseudo</p>
                    </label>
                    <br />
                    <input
                      className="input-form"
                      value={this.state.fullName}
                      onChange={event => this.genericSync(event)}
                      type="text"
                      name="fullName"
                      placeholder="Miller"
                    />
                    <br />
                    <label>
                      <p>Email</p>
                    </label>
                    <br />
                    <input
                      className="input-form"
                      value={this.state.email}
                      onChange={event => this.genericSync(event)}
                      type="email"
                      name="email"
                      placeholder="superstar@ironhack.com"
                    />
                    <br />
                    <label>
                      <p>Mot de passe</p>
                    </label>
                    <br />
                    <input
                      className="input-form"
                      value={this.state.originalPassword}
                      onChange={event => this.genericSync(event)}
                      type="password"
                      name="originalPassword"
                      placeholder="*******"
                    />
                    <div className="header-button">
                      <button
                        className="btn btn-border page-scroll"
                        id="submit"
                        type="submit"
                      >
                        Enregistrer
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                      <div className="clearfix" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 p-0">
                <div className="intro-img">
                  <img className="genreImg" src={illu} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.message && <div> {this.state.message} </div>}
        <Footer />
      </Fragment>
    );
  }
}

export default Signup;
