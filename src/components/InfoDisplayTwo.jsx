import React from 'react';
import axios from 'axios';

export default class StatsTwo extends React.Component {
  
    render() {
      return (
        <ul>
          <h2>Current block {this.props.data[(this.props.data.length -1)].block.block_number}</h2>
          <h3>Server: {this.props.server}</h3>
          <br/>
          {this.props.data
              .map(person =>
                <li>Block: <em>{person.block.block_number}</em> -   Time index: {person.block.timestamp.slice(11, 19)}  -  Signature: <br></br> <h5>{person.block.transactions[0].signature}</h5></li>
              )
          }
        </ul>
      )
    }
  }