import React, {useState} from 'react';
import axios from 'axios';
import './css/Create.css'

function Create() {
  const [airport, setAirport] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const [airlines, setAirlines] = useState('');
  const [flights, setFlights] = useState('');
  const [restaurants, setRestaurants] = useState('');
  const [amenities, setAmenities] = useState('');
  const [review, setReview] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      airport,
      abbreviation,
      airlines,
      flights,
      restaurants,
      amenities,
      review,
      website,
    };
    console.log(fields)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/airports`;
    await axios.post(airtableURL, { fields }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
    });
    setAirport('');
    setAbbreviation('');
    setAirlines('');
    setFlights('');
    setRestaurants('');
    setAmenities('');
    setReview('');
    setWebsite('');
  }
  
  
  return (
    <div className="create-grid">
      <form onSubmit={handleSubmit}>
        <label htmlFor="airport">Airport Name: </label>
        <input type="text" value={airport} onChange={(e) => setAirport(e.target.value)} />
        <br />
        <label htmlFor="abbreviation">IATA Abbreviation: </label>
        <input type="text" value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)}/>
        <br />
        <label htmlFor="airlines">Airlines: </label>
        <textarea className="big-text" rows="10" cols="20" value={airlines} onChange={(e) => setAirlines(e.target.value)}/>
        <br />
        <label htmlFor="flights">Top 10 Flight Destinations: </label>
        <textarea className="big-text" rows="10" cols="20" value={flights} onChange={(e) => setFlights(e.target.value)}/>
        <br />
        <label htmlFor="restaurants">Restaurants: </label>
        <textarea className="big-text" rows="10" cols="20" value={restaurants} onChange={(e) => setRestaurants(e.target.value)}/>
        <br />
        <label htmlFor="amenities">Amenities: </label>
        <textarea className="big-text" rows="10" cols="20" value={amenities} onChange={(e) => setAmenities(e.target.value)}/>
        <br />
        <label htmlFor="review">Review: </label>
        <textarea className="big-text" rows="10" cols="20" value={review} onChange={(e) => setReview(e.target.value)}/>
        <br />
        <label htmlFor="website">Website: </label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Create;