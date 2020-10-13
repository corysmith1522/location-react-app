import React from 'react';
import "./css/Image.css"

function Images() {
  const airplaneIMG = 'https://bit.ly/30QFsAr'
  const coolIMG = 'https://bit.ly/33UFgC7'
  return (
    <div>
      <img src={airplaneIMG} alt="airplane" className="airplane" />
      <img src={coolIMG} alt="airplane" className="cool-airplane" />
    </div>
  )
}

export default Images;