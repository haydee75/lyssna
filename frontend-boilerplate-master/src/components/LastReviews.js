import React, { Component } from "react";
import axios from "axios";

class LastReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeReviews: []
    };
  }

  componentDidMount() {
    this.fetchLastReviews();
  }

  fetchLastReviews() {
    axios
      .get(process.env.REACT_APP_HOST_API + `/lastReviews`)
      .then(response => {
        console.log(response.data);
        this.setState({
          listeReviews: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var listeObjectsReviews = this.state.listeReviews.map(review => {
      return review.reviews[0];
    });

    var reviewsArray = [];

    reviewsArray.push(...listeObjectsReviews);

    const listeReviews = reviewsArray.map(review => (
      <div key={review._id} className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <div className="team-thumb">
            <img src={review.image} className="img-fluid" alt="" />
          </div>
          <div className="team-details">
            <div className="team-inner text-center">
              <h6>{review.title}</h6>
              <hr />
              {/* <h5 className="team-title">{review.user.fullName}</h5> */}
              <span>
                {review.rating}&nbsp;
                <i className="lni-star-filled" />
              </span>
              <p className="commentairePreview">{review.comments}</p>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <section id="team" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-text section-header text-center">
                <div>
                  <h2 className="section-title title-white">
                    Les derniers avis
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">{listeReviews}</div>
        </div>
      </section>
    );
  }
}

export default LastReviews;
