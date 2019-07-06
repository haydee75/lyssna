import React, { Component, Fragment } from "react";
import axios from "axios";
import AddReview from "./AddReview";

class CardGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      episodes: [],
      listeReviews: [],
      genre: this.props.genre,
      user: this.props.currentUser,
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

  componentDidMount() {
    this.fetchPodcasts();
  }

  fetchPodcasts() {
    axios
      .get(process.env.REACT_APP_HOST_API + `/podcast/${this.state.genre}`)
      .then(response => {
        this.setState({
          datas: response.data.podcasts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchEpisodes(e) {
    axios
      .post(process.env.REACT_APP_HOST_API + "/podcastEpisodes", {
        query: e
      })
      .then(response => {
        //console.log(response.data.episodes);
        this.setState({
          episodes: response.data.episodes
        });
      });
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
            <i className="lni-star-filled" />
          </span>
        </p>
        <p>{review.comments}</p>
        <br />
      </div>
    ));
    return (
      <div className="container-fluid">
        {this.state.datas.map((d, i) => (
          <Fragment key={d.id}>
            <div className="jumbotron text-center white-jumbotron">
              <img className="imageGenre" src={d.image} alt="img-podcast" />
              <br />
              <h4>{d.title}</h4>
              <br />
              <p>{d.description}</p>
              <br />
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target={`#` + d.id}
                aria-expanded="false"
                aria-controls={"collapseExample" + d.id}
                onClick={e => this.searchEpisodes(d.id, e)}
              >
                Voir tous les épisodes
              </button>
            </div>
            <div className="collapse" id={d.id}>
              <div className="card card-body cardGenre">
                <div className="album py-5 bg-light">
                  <div className="container">
                    <div className="row">
                      {this.state.episodes.map((e, j) => (
                        <Fragment key={e.id}>
                          <div className="col-md-4">
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
                                    onClick={() =>
                                      this.addEpisodeToMyPlaylist(e)
                                    }
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
                                <h4 className="title-episode">
                                  {e.title_original}
                                </h4>
                                <div className="card-text">
                                  <figure className="itemSearch">
                                    <audio controls src={e.audio}>
                                      Your browser does not support the
                                      <code>audio</code> element.
                                    </audio>
                                  </figure>
                                </div>
                                <a
                                  className="btn btn-border page-scroll btn-width-100 "
                                  data-toggle="collapse"
                                  href={`#` + i + "_" + j}
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls={"collapseExample" + e.id}
                                  onClick={() => this.displayReviews(`${e.id}`)}
                                >
                                  avis
                                </a>
                                <br />
                                <br />
                                <div className="collapse" id={i + "_" + j}>
                                  <div className="card card-body">
                                    {listeReviews}
                                    <hr />
                                    <br />
                                    {this.state.user && (
                                      <button
                                        type="button"
                                        className="btn-common-small btn-width-100"
                                        data-toggle="modal"
                                        data-target={`#` + i + "-" + j}
                                      >
                                        Commenter
                                      </button>
                                    )}
                                    <div
                                      className="modal fade"
                                      id={i + "-" + j}
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
                                              addTheReview={
                                                this.addReviewHandler
                                              }
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
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default CardGenre;
