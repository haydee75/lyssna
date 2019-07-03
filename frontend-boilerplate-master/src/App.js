import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/user-pages/Login";
import Signup from "./components/user-pages/Signup";
import Categories from "./components/Categories";
import ListePodcastsByCategorie from "./components/ListePodcastsByCategorie";
import ListeEpisodesByTopic from "./components/ListeEpisodesByTopic";
import ListeRecommendationsByID from "./components/ListeRecommendationsByID";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onUserChange = user => {
    this.setState({ currentUser: user });
  };

  // this is the method for updating "currentUser"
  // (must be defined in App.js since it's the owner of "currentUser" now)
  syncCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_HOST_API + "/api/checkuser", {
        withCredentials: true
      })
      .then(responseFromBackend => {
        // console.log("Check User in APP.JS: ",responseFromBackend.data)
        const { userDoc } = responseFromBackend.data;
        this.syncCurrentUser(userDoc);
      });
  }

  render() {
    // Autre méthode navbar diverses
    // let app;
    // if (this.state.user === null) {
    //   app = <Navbar />;
    // } else {
    //   app = <NavbarUser />;
    // }

    // console.log(this.state.currentUser);
    return (
      <Fragment>
        <Navbar
          currentUser={this.state.currentUser}
          onUserChange={this.onUserChange}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route
            exact
            path="/Login"
            render={() => <Login onUserChange={this.onUserChange.bind(this)} />}
          />
          <Route
            exact
            path="/Signup"
            render={() => (
              <Signup onUserChange={this.onUserChange.bind(this)} />
            )}
          />
        </Switch>
        <Route
          exact
          path="/Categories"
          render={props => (
            <Categories {...props} currentUser={this.state.currentUser} />
          )}
        />
        <Route
          path="/ListePodcastsByCategorie/:genre"
          render={props => (
            <ListePodcastsByCategorie
              {...props}
              currentUser={this.state.currentUser}
            />
          )}
        />
        <Route
          path="/ListeEpisodesByTopic/:topic"
          render={props => (
            <ListeEpisodesByTopic
              {...props}
              currentUser={this.state.currentUser}
            />
          )}
        />
        <Route
          path="/ListeRecommendationsByID/:recommendations"
          render={props => (
            <ListeRecommendationsByID
              {...props}
              currentUser={this.state.currentUser}
            />
          )}
        />
        <Route path="/Logout" />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
