import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "umbrella", "tada", "kissing_heart", "muscle", "brain", "sun_with_face", "spades", "gift_heart", "dog2", "trophy", "cocktail"]


class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",
    }
  }
  onInputChange = (event) => {
    console.log("I'm in the onInputChange funtion");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      card: {
        text: this.state.text,
        emoji: this.state.emoji,
      }

    };

    this.setState({
      text: '',
      emoji: '',
    });

    console.log("created a new card from input", newCard);
    this.props.addNewCardToCollection(newCard);
  }

  emojiSelection = () => {
    return  EMOJI_LIST.map((item, i) => {
      return <option
        key={i}
        value={item}>{emoji.getUnicode(item)}</option>
    });
  }

  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">
          <h2>New card Submission Form</h2>
        </div>
        <form className="new-card-form__form"
          onSubmit={this.onFormSubmit}>
            <label  htmlFor="text">Your Message</label>
            <textarea
              className="new-card-form__form-textarea"
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}/>
            <label htmlFor="emoji"> Emoji</label>
            <select
              className="new-card-form__form-select"
              name="emoji"
              value={this.state.emoji}
              onChange={this.onInputChange}>
              {this.emojiSelection()}
            </select>
            <input
              type="submit"
              value="Submit Message"
              className="new-card-form__form-button"
              />
          </form>
        </div>
      );
    }
  }

  export default NewCardForm;
