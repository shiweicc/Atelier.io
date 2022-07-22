import React from 'react';
import Bar from './Bar.jsx';
import full from './resources/100.png';

const Rating = (props) => {
  if (props.starsFilter.includes(props.rating)) {
    return (
      <div className='ratings'>
        <span className='underlined' onClick={props.setStarsFilter}>{props.rating} Stars <img className='star' src={full} alt='Full star'></img><Bar rating={props.percentage}/></span>
      </div>
    );
  } else {
    return (
      <div className='ratings'>
        <span className='underlined' onClick={props.setStarsFilter}>{props.rating} Stars <Bar rating={props.percentage}/></span>
      </div>
    );
  }
}

export default Rating;