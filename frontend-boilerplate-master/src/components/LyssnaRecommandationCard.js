import React from "react";

function LyssnaRecommandationCard(props) {
  return (
    <div className="carousel-item item-card" key={props.id}>
      <div className="screenshot-thumb">
        <img className="img-car" src={props.image} alt={props.title_original} />
        <br />
        <div className="hover-content text-center">
          <div className="fancy-table">
            <div className="table-cell">
              <div className="single-text">
                <div className="decouvrez">
                  <h5 className="title-episode-card">{props.title_original}</h5>
                </div>
                <figure className="itemSearch">
                  <audio controls src={props.audio}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LyssnaRecommandationCard;
