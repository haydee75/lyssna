import React, { Component } from "react";
import axios from "axios";

class SelectCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    };
  }

  componentDidMount() {
    this.fetchPodcasts();
  }

  fetchPodcasts() {
    axios
      .get("http://localhost:3001/categories")
      .then(response => {
        this.setState({
          podcasts: response.data.genres
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <select
        onChange={this.handleChange}
        className="form-control form-control-lg select-genre"
      >
        <option>Rechercher par genre</option>
        {this.state.podcasts.map(p => (
          <option key={p.id}>
            {p.name}-{p.id}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectCategories;
