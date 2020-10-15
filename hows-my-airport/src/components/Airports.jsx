import React from 'react';
import List from './List';
import "./css/Airports.css"

function Airports() {
  const airplaneIMG = 'https://bit.ly/30QFsAr'
  const coolIMG = 'https://bit.ly/33UFgC7'
  const airportGate = 'https://bit.ly/34VWka5'
  const planeGate = 'https://bit.ly/312iwhF'
  const floorshot = 'https://bit.ly/375DDTT'
  const landing = 'https://bit.ly/2SUEOx9'

  return (
    <div>
      <div className="hyperlinks">
        <h2 className="important-links">THE MOST IMPORTANT LINKS</h2>
          <h6><a className="other-links" href='https://bit.ly/350ZYzt'>Real-Time Flight Delay Status</a></h6>
          <h6><a className="other-links" href='https://bit.ly/2GSZaor'>Directions and Traffic</a></h6>
          <h6><a className="other-links" href='https://bit.ly/3j8AbKU'>Real-Time Weather Status</a></h6>
      </div>
      <div className="layout">
        <div className="list">
          <List />
        </div>
        <div className="pics">
          <img src={airplaneIMG} alt="airplane" />
          <img src={coolIMG} alt="airplane" />
          <img src={airportGate} alt="airport-gate" />
          <img src={planeGate} alt="airplane-gate" />
          <img src={floorshot} alt="airport-concourse" />
          <img src={landing} alt="airplane-landing" />
        </div>
      </div>
    </div>
  )
}

export default Airports;