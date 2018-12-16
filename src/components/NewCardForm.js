import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",
    }
  }
  onInputChange = (event) => {
    console.log("Hit the onInputChange funtion");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDafault();

    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji,
    };

    this.setState({
      text: '',
      emoji: '',
    });
    console.log("created a new card from input", newCard);
    this.props.addNewCardToCollection(newCard);
  }

  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">
          <h2>New card Submission Form</h2>
        </div>
        <form
          className="new-card-form__form"
          onSubmit={this.onFormSubmit}>
            <label for="text"> Message</label>
            <input
              className="new-card-form__form-textarea"
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
              />

            Emoji

            <input
              className="new-card-form__form-select"
              placeholder = "heart_eyes"
              type="text"
              name="emoji"
              value={this.state.emoji}
              onChange={this.onInputChange}
              />
            <input
              type="submit"
              value="Submit Message"
              className="new-card-form__form-button"
              />
        </form>
      </div>
    )
  }
};

export default NewCardForm;
