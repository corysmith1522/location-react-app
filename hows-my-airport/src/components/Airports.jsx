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
  )
}

export default Airports;