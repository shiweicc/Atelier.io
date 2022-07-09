import React from 'react';

var Style = (props) => {
  return (
    <div id='style' style={{'display': 'flex', 'flex-direction': 'row'}}>
      {
        props.styles.map((style) => {
          return (<div>
            {style.photos[0]['thumbnail_url']
              ? <img src={style.photos[0]['thumbnail_url']} height='50px' width='50px'></img>
              : <img src={`https://source.unsplash.com/50x50/?${props.name}`}></img>
            }
          </div>)
        })
      }
    </div>
  )
}

export default Style;