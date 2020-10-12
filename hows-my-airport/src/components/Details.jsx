import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  showInfo() {
    this.setState({ clicked: !this.state.clicked})
  }

  details() {
    const getAirports = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/airports`;
      await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
    };
    getAirports();
    
    return (
      <p>{props.airport.fields.airlines}</p>
    )
  }

  render() {
    return (
      <button onClick={() => this.showInfo() && this.details()}>READ MORE</button>
      
    )
  }
}

export default Details