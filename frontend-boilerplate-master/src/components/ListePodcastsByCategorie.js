import React, { Component, Fragment } from "react";
import axios from "axios";
//import Navbar from "./Navbar";
import HeaderGenre from "./HeaderGenre";
import CardGenre from "./CardGenre";
import Footer from "./Footer";

class ListePodcastsByCategorie extends Component {
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
    var genreId = this.props.match.params.genre;

    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          {/* <Navbar /> */}
          <HeaderGenre genre={genreId} />
        </div>
        <CardGenre
          genre={genreId}
          searchRecommendations={this.searchRecommendations.bind(this)}
          currentUser={this.props.currentUser}
        />
        <br />
        <Footer />
      </Fragment>
    );
  }
}

export default ListePodcastsByCategorie;
