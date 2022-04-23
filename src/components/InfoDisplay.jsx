import React from 'react';
import axios from 'axios';

export default class Stats extends React.Component {
    state = {
      data: []
    }
  
    componentDidMount() {
      axios.get(`https://carbon.cchain.me/last_blocks/6`)
        .then(res => {
          const data = res.data;
          this.setState({ data: data });
        })
    }
  
    render() {
      return (
        <ul>
          <h1>Previous block timestamps:</h1>
          <br></br>
          <h2>Current block {this.props.data[(this.props.data.length -1)].block.block_number}</h2>
          {
            this.props.data
              .map(person =>
                <li>Block No: {person.block.block_number}   -   Time index: {person.block.timestamp}</li>
              )
          }
        </ul>
      )
    }
  }