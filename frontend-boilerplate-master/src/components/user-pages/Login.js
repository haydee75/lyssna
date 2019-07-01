import React, { Component, Fragment } from "react";
//import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import illu from "../../img/cherry/sign-in-2.png";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: "",
      message: null,
      redirect: false
    };
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        process.env.REACT_APP_HOST_API + "/api/login",
        this.state,
        { withCredentials: true } // FORCE axios to send cookies across domains
      )
      .then(response => {
        console.log("Login Page", response.data);
        const { userDoc } = response.data;
        // send "userDoc" to the App.js function that changes "currentUser"
        this.props.onUserChange(userDoc);
        alert("Logged in successfully!");
        this.setState({
          redirect: true
        });
      })
      .catch(err => {
        if (err.response && err.response.data) {
          // console.error("API response", err.response.data)
          return this.setState({ message: err.response.data.message });
        }
      });
  }
  render() {
    return (
      <Fragment>
        {this.renderRedirect()}
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          <div className="container">
            <div className="row space-100">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="contents">
                  <h2 className="head-title">Connectez vous</h2>
                  <form onSubmit={event => this.handleSubmit(event)}>
                    <br />
                    <input
                      className="input-form"
                      value={this.state.email}
                      onChange={event => this.genericSync(event)}
                      type="email"
                      name="email"
                      placeholder="barabara@gould.com"
                    />
                    <br />
                    <br />
                    <input
                      className="input-form"
                      value={this.state.originalPassword}
                      onChange={event => this.genericSync(event)}
                      type="password"
                      name="originalPassword"
                      placeholder="****"
                    />
                    <div className="header-button">
                      <button
                        className="btn btn-border page-scroll"
                        id="submit"
                        type="submit"
                      >
                        Se connecter
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                      <div className="clearfix" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 p-0">
                <div className="intro-img">
                  <img src={illu} alt="" />
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

export default Login;
