import React from 'react';

const Review = (props) => {
  console.log(props);
  return (
    <div class="review">
      <div>{props.reviews.rating}</div>
      <div>{props.reviews.reviewer_name}, {props.reviews.date}</div>
      <div>{props.reviews.summary}</div>
      <div>{props.reviews.body}</div>
      <div>Helpful? Yes {props.reviews.helpfulness} | Report</div>
    </div>
  );
}

export default Review;