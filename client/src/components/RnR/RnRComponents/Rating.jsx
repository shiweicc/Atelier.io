import React from 'react';
import Bar from './Bar.jsx';
import full from './resources/100.png';

const Rating = (props) => {
  return (
    <div class='ratings'>
    <img class='star' src={full}/> {props.rating} Stars <Bar rating={props.percentage}/>
    </div>
  );
}

export default Rating;