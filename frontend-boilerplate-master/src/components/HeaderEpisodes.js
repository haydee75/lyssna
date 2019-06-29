import React, { Component } from "react";
import illu from "../img/cherry/cherry-payment-processed.png";

class HeaderEpisodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">
                <big>{this.state.topic}</big>
              </h2>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img
                className="genreImg"
                src={illu}
                alt="cherry-payment-processed"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderEpisodes;
