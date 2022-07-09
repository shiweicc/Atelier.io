import React from 'react';

var Style = (props) => {
  return (
    <div id='style'>
      {
        props.styles.map((style) => {
          return (<div>
            <img src={style.photos[0]['thumbnail_url']} height='50px'></img>
          </div>)
        })
      }
    </div>
  )
}

export default Style;