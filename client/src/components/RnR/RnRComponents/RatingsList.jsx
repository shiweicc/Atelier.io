import React from 'react';
import Rating from './Rating.jsx';

const RatingsList = (props) => {
  let total = Object.values(props.ratings).reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);
  return (
    <div>
      {Object.keys(props.ratings).map((key) => {
        return <Rating rating={key} percentage={Math.floor((parseInt(props.ratings[key])/total)*100)}/>
      })}
    </div>
  );
}

export default RatingsList;