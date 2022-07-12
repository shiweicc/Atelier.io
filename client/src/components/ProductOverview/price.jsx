import React from 'react';

var Price = (props) => {
  if (props.selected['sale_price']) {
    return (<div id='price' style={{'display': 'flex', 'flex-direction': 'row'}}>
        <p style={{'color': 'red'}}>${props.selected['sale_price']}</p>
        <p style={{'text-decoration': 'line-through'}}>{props.selected['original_price']}</p>
      </div>)
  }
  return (
    <p id='price'>${props.selected['original_price']}</p>
  )
}

export default Price;