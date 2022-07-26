import React from 'react';
import Rating from './Rating.jsx';

const RatingsList = (props) => {
  let total = Object.values(props.ratings).reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);

  let fullRatings = {};
  let allRatings = Object.keys(props.ratings);

  for (let i = 1; i < 6; i++) {
    if (allRatings.includes(''+i)) {
      fullRatings[i] = props.ratings[i];
    } else {
      fullRatings[i] = 0;
    }
  }

  return (
    <div>
      {Object.keys(fullRatings).map((key, i) => {
        return <Rating key={i} rating={key} percentage={Math.floor((parseInt(props.ratings[key])/total)*100)} starsFilter={props.starsFilter} setStarsFilter={props.setStarsFilter}/>
      })}
    </div>
  );
}

export default RatingsList;