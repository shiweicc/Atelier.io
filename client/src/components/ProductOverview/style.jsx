import React from 'react';

var Style = (props) => {
  return (
    <ul id='POstyles'>
      {
        props.styles.map((style, i) => {
          return (<li>
            {style.photos[0]['thumbnail_url']
              ? <img class='POstyle' src={style.photos[0]['thumbnail_url']} height='50px' width='50px' onClick={props.handleClick} styleid={i}></img>
              : <img class='POstyle' src={`https://source.unsplash.com/50x50/?${props.name}`} onClick={props.handleClick} styleid={i}></img>
            }
          </li>)
        })
      }
    </ul>
  )
}

export default Style;