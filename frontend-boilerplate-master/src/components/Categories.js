import React, { Component, Fragment } from "react";
import axios from "axios";
//import Navbar from "./Navbar";
import Search from "./Search";
import HeaderCategorie from "./HeaderCategorie";
import SelectCategories from "./SelectCategories";
import LyssnaRecommendations from "./LyssnaRecommendations";
import SectionDivertissement from "./SectionDivertissement";
import Identites from "./Identites";
import Decouverte from "./Decouverte";
import Sciences from "./Sciences";
import Lyfestyle from "./Lyfestyle";
import Policier from "./Policier";
import Footer from "./Footer";

class Categories extends Component {
  searchGenre(genre) {
    axios
      .post("http://localhost:3001/bestPodcastsByGenre", {
        query: genre
      })
      .then(response => {
        this.props.history.push("/ListePodcastsByCategorie/" + genre);
        console.log(response);
      });
  }

  searchTopic(topic) {
    axios
      .post("http://localhost:3001/topic", {
        query: topic
      })
      .then(response => {
        this.props.history.push("/ListeEpisodesByTopic/" + topic);
        console.log(response);
      });
  }

  searchRecommendations(recommendations) {
    axios
      .post("http://localhost:3001/recommendations", {
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
          {/* <Navbar /> */}
          <HeaderCategorie />
          <br />
          <div className="categorie-search">
            <div>
              <SelectCategories />
            </div>
            <div>
              <Search
                searchRecommendations={this.searchRecommendations.bind(this)}
                currentUser={this.props.currentUser}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <LyssnaRecommendations />
        <SectionDivertissement searchGenre={this.searchGenre.bind(this)} />
        <Identites searchTopic={this.searchTopic.bind(this)} />
        <Decouverte searchTopic={this.searchTopic.bind(this)} />
        <Sciences searchGenre={this.searchGenre.bind(this)} />
        <Lyfestyle searchTopic={this.searchTopic.bind(this)} />
        <br />
        <br />
        <br />
        <Policier />
        <Footer />
        <a href="#home" className="back-to-top">
          <i className="lni-chevron-up" />
        </a>
      </Fragment>
    );
  }
}

export default Categories;
