import React, { Component, Fragment } from "react";
import axios from "axios";
//import Navbar from "./Navbar";
import HeaderEpisodes from "./HeaderEpisodes";
import CardTopic from "./CardTopic";

class ListeEpisodesByTopic extends Component {
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
    var topicName = this.props.match.params.topic;
    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          {/* <Navbar /> */}
          <HeaderEpisodes topic={topicName} />
        </div>
        <CardTopic
          topic={topicName}
          searchRecommendations={this.searchRecommendations.bind(this)}
          currentUser={this.props.currentUser}
        />
      </Fragment>
    );
  }
}

export default ListeEpisodesByTopic;
