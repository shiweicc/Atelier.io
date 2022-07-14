import React from "react";
import empty from './resources/0.png';
import half from './resources/50.png';
import full from './resources/100.png';

const Stars = (props) => {

  const getStars = (value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for (let i = 0; i < whole; i++) {
      stars.push(full);
    }
    if (part >= 5) {
      stars.push(half);
    }
    for (let i = whole; i < (part >= 5 ? 4 : 5); i++) {
      stars.push(empty);
    }
    return stars;
  };

  return (
    <div>
      {getStars(props.ratings).map((val) => {
        return <img class='star' src={val}/>
      })}
    </div>
  )
}

export default Stars;