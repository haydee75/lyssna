import React, { Component, Fragment } from "react";
import axios from "axios";
import Search from "./Search";
// import Navbar from "./Navbar";
import Header from "./Header";
import Details from "./Details";
import AccountBanner from "./AccountBanner";
import LastTrends from "./LastTrends";
import CategoriesPreview from "./CategoriesPreview";
import LastReviews from "./LastReviews";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import Sondage from "./Sondage";

class Home extends Component {
  searchTopic(topic) {
    axios
      .post(process.env.REACT_APP_HOST_API + "/topic", {
        query: topic
      })
      .then(response => {
        this.props.history.push("/ListeEpisodesByTopic/" + topic);
        console.log(response);
      });
  }

  searchRecommendations(recommendations) {
    axios
      .post(process.env.REACT_APP_HOST_API + "/recommendations", {
        query: recommendations
      })
      .then(response => {
        this.props.history.push("/ListeRecommendationsByID/" + recommendations);
        console.log(response);
      });
  }

  render() {
    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          <Header />
        </div>
        <div className="center">
          <Search
            searchRecommendations={this.searchRecommendations.bind(this)}
            currentUser={this.props.currentUser}
          />
        </div>
        <Details />
        <AccountBanner />
        <LastTrends />
        <CategoriesPreview searchTopic={this.searchTopic.bind(this)} />
        <LastReviews />
        <Sondage />
        <GetInTouch />
        <Footer />
        <a href="#home" className="back-to-top">
          <i className="lni-chevron-up" />
        </a>
      </Fragment>
    );
  }
}

export default Home;
