import React, { Component } from "react";
import illu from "../img/cherry/cherry-searching.png";

class HeaderCategorie extends Component {
  render() {
    return (
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">Catégories</h2>
              <p>
                Une idée en tête ?<br />
                Saisissez un mot clef dans la barre de recherche ou choisissez
                une thématique parmis les nombreux genres et playlists
                proposés...
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src={illu} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCategorie;
