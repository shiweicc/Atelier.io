import React from 'react';

const Sort = (props) => {

  let totalRatings = Object.values(props.reviewsMetadata.ratings);
  totalRatings = totalRatings.reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);

  return (
    <div class='RnRHeadReviews'>
      <span class='reviewsCount'>{totalRatings}</span>
      <span> reviews</span>
    </div>
  );
}

export default Sort;