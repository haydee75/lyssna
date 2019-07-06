import React, { Component, Fragment } from "react";
import axios from "axios";
//import Navbar from "./Navbar";
import HeaderRecommendations from "./HeaderRecommendations";
import CardRecommendation from "./CardRecommendation";

class ListeRecommendationsByID extends Component {
  searchRecommendations(recommendations) {
    axios
      .post(process.env.REACT_APP_HOST_API + "/recommendations", {
        query: recommendations
      })
      .then(response => {
        this.props.history.push("/ListeRecommendationsByID/" + recommendations);
        //console.log(response);
      });
  }
  render() {
    var recommendationID = this.props.match.params.recommendations;
    return (
      <Fragment>
        <div id="home" className="hero-area">
          <div className="overlay">
            <span />
            <span />
          </div>
          {/* <Navbar /> */}
          <HeaderRecommendations recommendations={recommendationID} />
        </div>
        <CardRecommendation
          recommendations={recommendationID}
          searchRecommendations={this.searchRecommendations.bind(this)}
          currentUser={this.props.currentUser}
        />
        <br />
      </Fragment>
    );
  }
}

export default ListeRecommendationsByID;
