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
        <div>
          {this.props.text}
        </div>
        <div>
          {this.props.emoji}
        </div>
        <button
          onClick={ this.deleteCardClickHandler }>
          Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
