import React, { useEffect, useState } from 'react';
import axios from "axios";
import Details from "./Details"
import "./css/List.css"


function List() {
  const [airports, setAirports] = useState([]);
  
  
  

  useEffect(() => {
    const getAirports = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/airports?sort%5B0%5D%5Bfield%5D=airport`;
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

  return (
    <div className="row">
      <div className="column">
      {airports.map((airport) => (
        <div key={airport.id}>
          <p className="base-info">{airport.fields.airport} ({airport.fields.abbreviation}) <a href={airport.fields.website} className="website">Website</a></p>
          <div className="column">
            <Details airport={airport} />
          </div>
        </div>  
      ))}
      </div>
    </div>
  )
}
// .filter(airport => airport.id === airports.id).map(filteredAirport => (everything from lines 43-52))

export default List;