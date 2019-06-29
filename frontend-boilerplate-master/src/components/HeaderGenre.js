import React, { Component } from "react";
import axios from "axios";
import illu from "../img/cherry/cherry-payment-processed.png";

class HeaderGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      genre: this.props.genre
    };
  }

  componentDidMount() {
    this.fetchPodcasts();
  }

  fetchPodcasts() {
    axios
      .get(`http://localhost:3001/podcast/${this.state.genre}`)
      .then(response => {
        //console.log(response.data);
        this.setState({
          datas: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">
                <big>{this.state.datas.name}</big>
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

export default HeaderGenre;
