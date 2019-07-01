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
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect(event) {
    this.setState({ rating: event.target.value });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // console.log(
    //   "Rating : " +
    //     this.state.rating +
    //     " || Comment : " +
    //     this.state.comments +
    //     " || id : " +
    //     this.state.id +
    //     " || user : " +
    //     this.state.user
    // );

    event.preventDefault();

    const id = this.state.id;
    const user = this.state.user;
    const rating = this.state.rating;
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
        this.setState({ rating: 0, comments: "" });
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

        <select
          className="form-control form-control-sm"
          value={this.state.rating}
          onChange={this.handleChangeSelect}
        >
          <option value={this.state.rating}>{this.state.rating}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
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
