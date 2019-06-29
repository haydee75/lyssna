import React, { Component } from "react";
import decouverte from "../img/cherry/cherry-page-not-found.png";

class Decouverte extends Component {
  render() {
    return (
      <section id="business-plan">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
              <div className="business-item-img">
                <img src={decouverte} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-4">
              <div className="business-item-info">
                <h3>Découverte</h3>
                <p>
                  Histoire, Littérature, Musique, Philisophie, voyagez à travers
                  les époques et les cultures et découvrez notre playlist pleine
                  de surprises.
                </p>
                <button
                  className="cursorPointer btn btn-common"
                  onClick={() => this.props.searchTopic("découverte")}
                >
                  J'écoute
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Decouverte;
