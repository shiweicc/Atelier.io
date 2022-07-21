import React from 'react';
import empty from './resources/0.png';
import half from './resources/50.png';
import full from './resources/100.png';

const Review = (props) => {

  console.log(props.reviews);

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
      <div className='review'>
        <div className='reviewHead'>
          <div>
            {getStars(props.reviews.rating).map((val, i) => {
              return <img key={i} className='star' src={val} alt='One of 5 stars designating how many stars this review has'/>
            })}
          </div>
          <div>✅ {props.reviews.reviewer_name}, {convertTime(props.reviews.date)}</div>
        </div>
        <div className='reviewTitle'>{props.reviews.summary}</div>
        <div className='reviewBody'>{props.reviews.body}</div>
        <div className='reviewBody'>✔️ I recommend this product</div>
        <div className='reviewBody'>
          <span className='helpful'>Helpful?</span>
          <span className='underlined' onClick={() => {return props.getReviewID(props.reviews.review_id, 'Helpful')}}>Yes</span>
          <span className='helpful'>&#40;{props.reviews.helpfulness}&#41;</span>
          <span className='helpful'> | </span>
          <span className='underlined' onClick={() => {return props.getReviewID(props.reviews.review_id, 'Report')}}>Report</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='review'>
        <div className='reviewHead'>
          <div>
            {getStars(props.reviews.rating).map((val, i) => {
              return <img key={i} className='star' src={val} alt='One of 5 stars designating how many stars this review has'/>
            })}
          </div>
          <div>✅ {props.reviews.reviewer_name}, {convertTime(props.reviews.date)}</div>
        </div>
        <div className='reviewTitle'>{props.reviews.summary}</div>
        <div className='reviewBody'>{props.reviews.body}</div>
        <div className='reviewBody'>
          <span className='helpful'>Helpful?</span>
          <span className='underlined' onClick={() => {return props.getReviewID(props.reviews.review_id, 'Helpful')}}>Yes</span>
          <span className='helpful'>&#40;{props.reviews.helpfulness}&#41;</span>
          <span className='helpful'> | </span>
          <span className='underlined' onClick={() => {return props.getReviewID(props.reviews.review_id, 'Report')}}>Report</span>
        </div>
      </div>
    );
  }
}

export default Review;