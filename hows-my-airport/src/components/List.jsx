import React, { useEffect, useState } from 'react';
import axios from "axios";
//import Details from "./Details"


function List() {
  const [airports, setAirports] = useState([]);
  const [clicked, setClicked] = useState(false);
  

  useEffect(() => {
    const getAirports = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/airports`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setAirports(response.data.records);
    };
    getAirports();
  }, []);

  //want to add useEffect for when button "Read More" is clicked
  // upon this action, the user will be able to see the rest of the API data shown for just their selected airport
  // another button will appear that says "Read Less"
  // when "Read Less" is clicked, the information will disappear, and the state will return to the original useEffect
  
  if (!airports) {
    return <h4>Loading...</h4>
  }

  const toggleData = () => {
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <div>
      {airports.map((airport) => (
        <div>
          <p key={airport.id}>{airport.fields.airport} ({airport.fields.abbreviation}) <a href={airport.fields.website}>Website</a></p>
          <button onClick={() => toggleData()}>READ MORE</button>
          {clicked ? 
            <div>
              <p>Airlines: {airport.fields.airlines}</p>
              <p>Top 10 Flight Destinations: {airport.fields.flights}</p>
              <p>Food Options: {airport.fields.restaurants}</p>
              <p>Amenities: {airport.fields.amenities}</p>
              <p>Review: {airport.fields.review}</p>
              <button onClick={() => toggleData()}>READ LESS</button>
            </div>
            : null}
        </div>
        
      )).filter(airport => airport.id === airports.id)}
    </div>
  )
}
// .filter(airport => airport.id === airports.id).map(filteredAirport => (everything from lines 43-52))

export default List;