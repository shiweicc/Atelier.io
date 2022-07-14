import React from "react";
import Star from './Star.jsx';

const Stars = (props) => {
  return (
    <>
      {Array.from(Array(5).keys()).map((_, i) => (
        <Star key={i}/>
      ))}
    </>
  )
}

export default Stars;