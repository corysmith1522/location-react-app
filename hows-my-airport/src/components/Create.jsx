import React from 'react';
import axios from 'axios';

function Create() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Airport Name</label>
        <input type="text"/>
        <label htmlFor="">IATA Abbreviation</label>
        <input type="text"/>
        <label htmlFor="">Airlines</label>
        <input type="text"/>
        <label htmlFor="">Top 10 Flight Destinations</label>
        <input type="text"/>
        <label htmlFor="">Restaurants</label>
        <input type="text"/>
        <label htmlFor="">Amenities</label>
        <input type="text"/>
        <label htmlFor="">Website</label>
        <input type="text"/>
        <label htmlFor="">Review</label>
        <input type="text"/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Create;