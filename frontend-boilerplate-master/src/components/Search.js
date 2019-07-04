import React, { Component } from "react";
import axios from "axios";
import AddReview from "./AddReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
      podcasts: [],
      listeReviews: [],
      search: "",
      page: 0,
      showDiv: false,
      episodId: "",
      episodImage: "",
      episodTitle_original: "",
      episodPublisher_original: "",
      episodAudio: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentUser !== prevState.currentUser) {
      // return { currentUser: nextProps.currentUser };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      //Perform some operation here
      this.setState({ user: this.props.currentUser });
    }
  }

  searchPodcast() {
    this.setState({ showDiv: !this.state.showDiv });
    axios
      .post(process.env.REACT_APP_HOST_API + "/podcasts", {
        query: this.state.search,
        page: this.state.page
      })
      .then(response => {
        console.log(response.data.results);
        this.setState({
          podcasts: response.data.results
        });
      });
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  changePage(page) {
    this.setState({ page, showDiv: !this.state.showDiv }, this.searchPodcast);
  }

  addReviewHandler = review => {
    const episodesCopy = [...this.state.episodes];
    episodesCopy.push(review);
    this.setState({
      episodes: episodesCopy
    });
  };

  displayReviews = episode => {
    axios
      .get(process.env.REACT_APP_HOST_API + "/reviews/" + episode, {
        query: episode
      })
      .then(response => {
        this.setState({
          listeReviews: response.data
        });
      });
  };

  addEpisodeToMyPlaylist = episode => {
    let data = { ...episode, user: this.state.user };
    axios
      .post(process.env.REACT_APP_HOST_API + "/addEpisodeToMyPlaylist", data)
      .then(() => {
        this.setState({
          id: "",
          image: "",
          title_original: "",
          publisher_original: "",
          audio: ""
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    var listeObjectsReviews = this.state.listeReviews.map(review => {
      return review.reviews[0];
    });

    var reviewsArray = [];

    reviewsArray.push(...listeObjectsReviews);

    const listeReviews = reviewsArray.map((review, index) => (
      <div key={index}>
        <p className="space-between">
          <b>{review.user.fullName}</b>
          <span>
            {review.rating}&nbsp;
            <i className="lni-heart-filled" />
          </span>
        </p>
        <p>{review.comments}</p>
        <br />
      </div>
    ));

    return (
      <div className="App">
        <div className="searchBar">
          <div className="searchContainer">
            <input
              className="searchbar"
              type="text"
              onChange={this.handleChange.bind(this)}
              placeholder="Rechercher un podcast... "
            />

            <button
              className="btn-search"
              onClick={this.searchPodcast.bind(this)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <br />
        {this.state.showDiv && (
          <div className="container-fluid">
            <div>
              <div className="card card-body cardGenre">
                <div className="album py-5 bg-light">
                  <div className="container">
                    <div className="row">
                      {this.state.podcasts.map(e => (
                        <div key={e.id} className="col-md-4">
                          <div className="card mb-4 box-shadow">
                            <img
                              className="card-img-top"
                              data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                              alt="Thumbnail [100%x225]"
                              src={e.image}
                              data-holder-rendered="true"
                            />
                            <div className="flex-space-between">
                              <div>
                                <i className="lni-facebook lni-reco cursorPointer" />
                                <i className="lni-twitter lni-reco cursorPointer" />
                                <i className="lni-google lni-reco cursorPointer" />
                              </div>
                              {this.state.user && (
                                <button
                                  className="cursorPointer reco"
                                  onClick={() => this.addEpisodeToMyPlaylist(e)}
                                >
                                  Ajouter à ma playlist
                                </button>
                              )}
                              &nbsp;
                              <button
                                className="cursorPointer reco"
                                onClick={() =>
                                  this.props.searchRecommendations(`${e.id}`)
                                }
                              >
                                Vous aimerez aussi
                              </button>
                            </div>
                            <div className="card-body">
                              <h4 className="title-episode">{e.title}</h4>
                              <div className="card-text">
                                <figure className="itemSearch">
                                  <audio controls src={e.audio}>
                                    Your browser does not support the
                                    <code>audio</code> element.
                                  </audio>
                                </figure>
                              </div>

                              <a
                                className="btn btn-border page-scroll btn-width-100"
                                data-toggle="collapse"
                                href={`#` + e.id}
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                onClick={() => this.displayReviews(`${e.id}`)}
                              >
                                avis
                              </a>
                              <br />
                              <br />
                              <div className="collapse" id={e.id}>
                                <div className="card card-body">
                                  {listeReviews}
                                  <hr />
                                  <br />
                                  {this.state.user && (
                                    <button
                                      type="button"
                                      className="btn-common-small btn-width-100"
                                      data-toggle="modal"
                                      data-target={`#myModal` + e.id}
                                    >
                                      Interagir
                                    </button>
                                  )}
                                  <div
                                    className="modal fade"
                                    id={`myModal` + e.id}
                                  >
                                    <div className="modal-dialog modal-dialog-centered">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h4 className="modal-title-small">
                                            {e.title_original}
                                          </h4>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                          >
                                            &times;
                                          </button>
                                        </div>

                                        <div className="modal-body">
                                          <AddReview
                                            addTheReview={this.addReviewHandler}
                                            idEpisode={e.id}
                                            titleEpisode={e.title_original}
                                            imageEpisode={e.image}
                                            user={this.state.user}
                                          />
                                        </div>

                                        <div className="modal-footer">
                                          <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                          >
                                            Close
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination">
              <button>&laquo;</button>
              {[1, 2, 3, 4, 5].map(d => (
                <button onClick={() => this.changePage(d)}>{d}</button>
              ))}
              <button>&raquo;</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
