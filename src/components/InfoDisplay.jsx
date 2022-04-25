import React from 'react';
import axios from 'axios';

export default class Stats extends React.Component {
  
    render() {
      return (
        <ul>
          <h1>Data from previous blocks:</h1>
          <br></br>
          <br></br>
          <h2>Current block {this.props.data[(this.props.data.length -1)].block.block_number}</h2>
          <br/>
          {
              this.props.data
              .map(person =>
                <li>Block: <em>{person.block.block_number}</em> - Date: {person.block.timestamp.slice(0, 10)}  -   Time index: {person.block.timestamp.slice(11, 19)}</li>
              )
          
          }
        </ul>
      )
    }
  }