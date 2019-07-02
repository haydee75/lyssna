import React, { Component, Fragment } from "react";
import axios from "axios";
import AddReview from "./AddReview";

class CardTopic extends Component {
  constructor(props) {
    super(props);
    console.log("là", props);
    this.state = {
      episodes: [],
      listeReviews: [],
      topic: this.props.topic,

      user: props.currentUser,
      episodId: "",
      episodImage: "",
      episodTitle_original: "",
      episodPublisher_original: "",
      episodAudio: ""
    };

    console.log("là", this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentUser !== prevState.currentUser) {
      // return { currentUser: nextProps.currentUser };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      //Perform some operation here
      console.log("ici");
      this.setState({ user: this.props.currentUser });
    }
  }

  componentDidMount() {
    this.fetchEpisodes();
  }

  fetchEpisodes() {
    axios
      .get(process.env.REACT_APP_HOST_API + `/episodes/${this.state.topic}`)
      .then(response => {
        this.setState({
          episodes: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
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
            <i className="lni-heart-filled" />
          </span>
        </p>
        <p>{review.comments}</p>
        <br />
      </div>
    ));

    return (
      <Fragment>
        <div className="container-fluid">
          <div>
            <div className="card card-body cardGenre">
              <div className="album py-5 bg-light">
                <div className="container">
                  <div className="row">
                    {this.state.episodes.map(e => (
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
                              <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="lni-facebook lni-reco cursorPointer" />
                              </a>
                              <a href="https://twitter.com/">
                                <i className="lni-twitter lni-reco cursorPointer" />
                              </a>
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
                            <h3 className="title-episode">
                              {e.title_original}
                            </h3>
                            <small>
                              <i>{e.publisher_original}</i>
                            </small>
                            <div className="card-text">
                              <figure className="itemSearch">
                                <audio controls src={e.audio}>
                                  Your browser does not support the
                                  <code>audio</code> element.
                                </audio>
                              </figure>
                            </div>
                            <a
                              className="btn btn-border page-scroll"
                              data-toggle="collapse"
                              href={`#` + e.id}
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                              onClick={() => this.displayReviews(`${e.id}`)}
                            >
                              voir les avis
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
                                    className="btn-common-small"
                                    data-toggle="modal"
                                    data-target={`#myModal` + e.id}
                                  >
                                    Laissez un avis
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
        </div>
      </Fragment>
    );
  }
}

export default CardTopic;
