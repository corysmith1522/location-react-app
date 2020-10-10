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


  return (
    <div>
      {airports.map((airport) => (
        <div>
          <p>{airport.fields.airport}</p>
          <button>Read More</button>
        </div>
        
      ))}
    </div>
  )
}

export default List;