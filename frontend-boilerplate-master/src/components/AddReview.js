import React, { Component } from "react";
import axios from "axios";

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.idEpisode,
      title: this.props.titleEpisode,
      image: this.props.imageEpisode,
      user: this.props.user,
      rating: "0",
      comments: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    var valueRating = document.querySelector('input[name="rating"]:checked')
      .value;

    console.log(valueRating);

    event.preventDefault();

    const id = this.state.id;
    const user = this.state.user;
    const rating = valueRating;
    const comments = this.state.comments;
    const title = this.state.title;
    const image = this.state.image;

    axios
      .post(process.env.REACT_APP_HOST_API + "/addReviews", {
        id,
        user,
        rating,
        comments,
        title,
        image
      })
      .then(() => {
        //this.props.getData();
        this.setState({ rating: "0", comments: "" });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="hidden" value={this.state.id} />
        <input type="hidden" value={this.state.user} />
        <input type="hidden" value={this.state.title} />
        <input type="hidden" value={this.state.image} />

        <div className="star-rating" id="rates">
          <input type="radio" id="5-stars" name="rating" value="5" />
          <label htmlFor="5-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="4-stars" name="rating" value="4" />
          <label htmlFor="4-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="3-stars" name="rating" value="3" />
          <label htmlFor="3-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="2-stars" name="rating" value="2" />
          <label htmlFor="2-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="1-star" name="rating" value="1" />
          <label htmlFor="1-star" className="star">
            &#9733;
          </label>
        </div>
        <textarea
          className="form-control"
          placeholder="Votre commentaire..."
          type="text"
          name="comments"
          value={this.state.comments}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <input type="submit" className="btn btn-common" value="Ajouter" />
      </form>
    );
  }
}

export default AddReview;
