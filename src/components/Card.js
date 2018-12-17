import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCardClickHandler = (event) => {
    console.log("The delete button was clicked");

    this.props.deleteCardCallback(this.props.id);
  }
  render() {
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {this.props.emoji}
          </div>
        </section>
          <div className="card__delete">
            <button
              onClick={ this.deleteCardClickHandler }>
              Delete
            </button>
          </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
