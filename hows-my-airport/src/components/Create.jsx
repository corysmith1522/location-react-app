import React, {useState} from 'react';
import axios from 'axios';

function Create() {
  const [name, setName] = useState('');
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
      name,
      abbreviation,
      airlines,
      flights,
      restaurants,
      amenities,
      review,
      website,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/airports`;
    await axios.post(airtableURL, { fields }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
    });
    setName('');
    setAbbreviation('');
    setAirlines('');
    setFlights('');
    setRestaurants('');
    setAmenities('');
    setReview('');
    setWebsite('');
  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="airport">Airport Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="abbreviation">IATA Abbreviation: </label>
        <input type="text" value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)}/>
        <br />
        <label htmlFor="airlines">Airlines: </label>
        <input type="text" value={airlines} onChange={(e) => setAirlines(e.target.value)}/>
        <br />
        <label htmlFor="flights">Top 10 Flight Destinations: </label>
        <input type="text" value={flights} onChange={(e) => setFlights(e.target.value)}/>
        <br />
        <label htmlFor="restaurants">Restaurants: </label>
        <input type="text" value={restaurants} onChange={(e) => setRestaurants(e.target.value)}/>
        <br />
        <label htmlFor="amenities">Amenities: </label>
        <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)}/>
        <br />
        <label htmlFor="review">Review: </label>
        <input type="text" value={review} onChange={(e) => setReview(e.target.value)}/>
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