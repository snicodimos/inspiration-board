import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }
componentDidMount() {
  axios.get('https://inspiration-board.herokuapp.com/boards/Semret/cards')
  .then((response) => {
    this.setState({
      cards: response.data
    });
  })
  .catch((error) => {
    this.setState({
      error: error.message
    });
  })
}

  render() {
    const emoji = require("emoji-dictionary");

    const messages = this.state.cards
    console.log(messages);
    const messageCollection = messages.map((message, i) => {
      return <Card
        key={i}
        text={message.card.text}
        emoji={emoji.getUnicode(`${message.card.emoji}`)}
        />
    });
    return (
      <div>
        {messageCollection}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
