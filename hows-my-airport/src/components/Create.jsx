import React, {useState} from 'react';
import axios from 'axios';

function Create(props) {
  const [name, setName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const [airlines, setAirlines] = useState('');
  const [destinations, setDestinations] = useState('');
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
      destinations,
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
  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Airport Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="">IATA Abbreviation</label>
        <input type="text" value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)}/>
        <br />
        <label htmlFor="">Airlines</label>
        <input type="text" value={airlines} onChange={(e) => setAirlines(e.target.value)}/>
        <br />
        <label htmlFor="">Top 10 Flight Destinations</label>
        <input type="text" value={destinations} onChange={(e) => setDestinations(e.target.value)}/>
        <br />
        <label htmlFor="">Restaurants</label>
        <input type="text" value={restaurants} onChange={(e) => setRestaurants(e.target.value)}/>
        <br />
        <label htmlFor="">Amenities</label>
        <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)}/>
        <br />
        <label htmlFor="">Review</label>
        <input type="text" value={review} onChange={(e) => setReview(e.target.value)}/>
        <br />
        <label htmlFor="">Website</label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Create;