import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: true
    }
  }

  showInfo() {
    this.setState({ clicked: !this.state.clicked })
  }

  render(props) {
    return (
      <div>
        <p>{props.airport.fields.airlines}</p>
        <p>{props.airport.fields.flights}</p>
        <p>{props.airport.fields.restaurants}</p>
        <p>{props.airport.fields.amenities}</p>
        <p>{props.airport.fields.review}</p>
        <button onClick={() => this.showInfo()}>READ LESS</button>
      </div>
    )
  }
}

export default Details