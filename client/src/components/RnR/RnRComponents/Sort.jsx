import React from 'react';

const Sort = (props) => {

  let totalRatings = Object.values(props.reviewsMetadata.ratings);
  totalRatings = totalRatings.reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);

  return (
    <div>
      {totalRatings} reviews, sorted by {props.sortOrder}
    </div>
  );
}

export default Sort;