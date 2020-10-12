import React, { useState } from 'react';

function Details (props) {
  const [clicked, setClicked] = useState(false)

  const toggleData = () => {
    clicked ? setClicked(false) : setClicked(true);
  }
  return (
      <div>
        <button onClick={() => toggleData()}>READ MORE</button>
      {clicked ?
        <div>
        <p>Airlines: {props.airport.fields.airlines}</p>
        <p>Top 10 Flight Destinations: {props.airport.fields.flights}</p>
        <p>Food Options: {props.airport.fields.restaurants}</p>
        <p>Amenities: {props.airport.fields.amenities}</p>
        <p>Review: {props.airport.fields.review}</p>
        <button onClick={() => toggleData()}>READ LESS</button>
      </div> : null}
      </div>
    )
}

export default Details