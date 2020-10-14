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
  
  if (!airports) {
    return <h4>Loading...</h4>
  }

  return (
    <section>
      <div className="data">
        {airports.map((airport) => (
          <div key={airport.id}>
            <p className="base-info">{airport.fields.airport} ({airport.fields.abbreviation}) <a href={airport.fields.website} className="website">Website</a></p>
            <Details airport={airport} />
          </div>
        ))}
      </div>
    </section>  
  )
}

export default List;