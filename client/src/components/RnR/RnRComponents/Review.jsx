import React from 'react';
import empty from './resources/0.png';
import half from './resources/50.png';
import full from './resources/100.png';

const Review = (props) => {

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

  const convertTime = (time) => {
    return new Date(time).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (props.reviews.recommend) {
    return (
      <div class='review'>
        <div class='reviewHead'>
          <div>
            {getStars(props.reviews.rating).map((val) => {
              return <img class='star' src={val}/>
            })}
          </div>
          <div>✅ {props.reviews.reviewer_name}, {convertTime(props.reviews.date)}</div>
        </div>
        <div class='reviewTitle'>{props.reviews.summary}</div>
        <div class='reviewBody'>{props.reviews.body}</div>
        <div class='reviewBody'>✔️ I recommend this product</div>
        <div class='reviewBody'>
          <span class='helpful'>Helpful?</span>
          <span class='helpful'>Yes &#40;{props.reviews.helpfulness}&#41;</span>
          <span class='helpful'> | </span>
          <span class='helpful'>Report</span>
        </div>
      </div>
    );
  } else {
    return (
      <div class='review'>
        <div class='reviewHead'>
          <div>
            {getStars(props.ratings).map((val) => {
              return <img class='star' src={val}/>
            })}
          </div>
          <div>✅ {props.reviews.reviewer_name}, {convertTime(props.reviews.date)}</div>
        </div>
        <div class='reviewTitle'>{props.reviews.summary}</div>
        <div class='reviewBody'>{props.reviews.body}</div>
        <div class='reviewBody'>
          <span class='helpful'>Helpful?</span>
          <span class='helpful'>Yes &#40;{props.reviews.helpfulness}&#41;</span>
          <span class='helpful'> | </span>
          <span class='helpful'>Report</span>
        </div>
      </div>
    );
  }
}

export default Review;