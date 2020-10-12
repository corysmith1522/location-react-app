import React, { useEffect, useState } from 'react';
import axios from "axios";


function List() {
  const [airports, setAirports] = useState([]);
  

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

  return (
    <div>
      {airports.map((airport) => (
        <div>
          <p>{airport.fields.airport} ({airport.fields.abbreviation})</p>
          <a href={airport.fields.website}>Website</a>
          <br />
          <button>READ MORE</button>
        </div>
        
      ))}
    </div>
  )
}

export default List;