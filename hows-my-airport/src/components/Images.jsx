import React from 'react';
import "./css/Image.css"

function Images() {
  const airplaneIMG = 'https://bit.ly/30QFsAr'
  return (
    <div>
      <img src={airplaneIMG} alt="airplane" className="airplane"/>
    </div>
  )
}

export default Images;