import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import AuthService from "./auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    };
  }

  displayPlaylist = user => {
    //console.log("user");
    // console.log(user);
    axios
      .get(process.env.REACT_APP_HOST_API + "/playlist/" + user, {
        query: user
      })
      .then(response => {
        //console.log(response.data);
        this.setState({
          playlist: response.data
        });
      });
  };

  deleteEpisode = id => {
    axios.post(
      process.env.REACT_APP_HOST_API + "/deleteEpisodeFromPlaylist/" + id,
      {
        query: id
      }
    );
  };

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     currentUser: nextProps.currentUser ? nextProps.currentUser : ""
  //   });
  // }

  logoutUser = () => {
    axios
      .post(process.env.REACT_APP_HOST_API + "/api/logout", this.state, {
        withCredentials: true
      })
      .then(() => {
        this.props.onUserChange(null);
      });
  };

  render() {
    //console.log("currentUserNavbar");
    //console.log(this.state.currentUser);
    return (
      <Fragment>
        <div className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
          <div className="container">
            <Link to="/" className="nav-link page-scroll">
              <h1 className="nav-title">Lyssna</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                {this.props.currentUser === null ? (
                  <Fragment>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link page-scroll">
                        Se connecter
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link page-scroll">
                        S'inscrire
                      </Link>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li className="nav-item">
                      <button
                        onClick={() => this.logoutUser()}
                        className="btn-playlist nav-link page-scroll"
                      >
                        Se déconnecter
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        id="effect"
                        type="button"
                        className="btn-playlist nav-link page-scroll"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() =>
                          this.displayPlaylist(this.props.currentUser._id)
                        }
                      >
                        Ma playlist
                      </button>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="modal left fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  {this.state.playlist.map(p => (
                    <div key={p._id} className="episode-box">
                      <div className="btn-right">
                        <button
                          className="btn-common-x-small"
                          onClick={() => this.deleteEpisode(`${p._id}`)}
                        >
                          X
                        </button>
                      </div>
                      <div className="div-playlist">
                        <img
                          className="card-playlist"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]"
                          src={p.image}
                          data-holder-rendered="true"
                        />
                        <h6>{p.title_original}</h6>
                        <figure className="itemSearch">
                          <audio controls src={p.audio}>
                            Your browser does not support the
                            <code>audio</code> element.
                          </audio>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-common"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
