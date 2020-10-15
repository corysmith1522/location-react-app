import React, { useState } from 'react';
import "./css/Details.css"

function Details (props) {
  const [clicked, setClicked] = useState(false)


  // found useful youtube video to help learn toggle function: https://www.youtube.com/watch?v=SEecAgV1-Ro
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
          <div className="props">{props.airport.fields.airlines}</div>
          <p className="categories">Top 10 Flight Destinations</p>
          <div className="props">{props.airport.fields.flights}</div>
          <p className="categories">Food Options</p>
          <div className="props">{props.airport.fields.restaurants}</div>
          <p className="categories">Amenities</p>
          <div className="props">{props.airport.fields.amenities}</div>
          <p className="categories">Review</p>
          <div className="props">{props.airport.fields.review}</div>
        <button onClick={() => toggleData()} className="readDisplay">READ LESS</button>
      </div> : null}
      </div>
    )
}

export default Details