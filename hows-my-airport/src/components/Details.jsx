import React, { useState } from 'react';
import "./css/Details.css"

function Details (props) {
  const [clicked, setClicked] = useState(false)

  const toggleData = () => {
    clicked ? setClicked(false) : setClicked(true);
  }
  return (
      <div>
      <button
        onClick={() => toggleData()}
        className= {clicked ? "readHide" : "readDisplay"}>READ MORE</button>
      {clicked ?
        <div className="fullDetails">
          <p className="categories">Airlines</p>
          {props.airport.fields.airlines}
        <p>Top 10 Flight Destinations: {props.airport.fields.flights}</p>
        <p>Food Options: {props.airport.fields.restaurants}</p>
        <p>Amenities: {props.airport.fields.amenities}</p>
        <p>Review: {props.airport.fields.review}</p>
        <button onClick={() => toggleData()} className="readDisplay">READ LESS</button>
      </div> : null}
      </div>
    )
}

export default Details