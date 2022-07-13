import React from 'react';

const Rating = (props) => {
  return (
    <div>
      {props.rating} | {props.percentage}
    </div>
  );
}

export default Rating;