import React from 'react';

var Price = (props) => {
  if (props.selected['sale_price']) {
    return (<div id='price'>
      Price:
        <p style={{'color': 'red'}}>{props.selected['sale_price']}</p>
        <p style={{'text-decoration': 'line-through'}}>{props.selected['original_price']}</p>
      </div>)
  }
  return (
    <p id='price'>Price: {props.selected['original_price']}</p>
  )
}

export default Price;