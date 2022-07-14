import React from 'react';

var Price = (props) => {
  if (props.selected['sale_price']) {
    return (<div id='POprice'>
        <p id='POsalesPrice'style={{'color': 'red'}}>${props.selected['sale_price']}</p>
        <p id ='POogPrice' style={{'text-decoration': 'line-through'}}>{props.selected['original_price']}</p>
      </div>)
  }
  return (<div id='POprice'>
      <p id='POogPrice'>${props.selected['original_price']}</p>
    </div>
  )
}

export default Price;