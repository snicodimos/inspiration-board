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
      cards: CARD_DATA
    };
  }


  render() {
    const emoji = require("emoji-dictionary");
    const messages = this.state.cards.cards
    console.log(messages);
    const messageCollection = messages.map((message, i) => {
      return <Card
        text={message.text}
        emoji={emoji.getUnicode(`${message.emoji}`)}
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
