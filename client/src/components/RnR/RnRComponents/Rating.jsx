import React from 'react';
import Bar from './Bar.jsx';
import full from './resources/100.png';

const Rating = (props) => {
  return (
    <div className='ratings'>
      <span className='underlined' onClick={props.setStarsFilter}>{props.rating} Stars <Bar rating={props.percentage}/></span>
    </div>
  );
}

export default Rating;