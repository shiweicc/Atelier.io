import React from 'react';

var Preview = (props) => {
  return (
    <div id='POpreview'>
      {
        props.sources.map((source) => {
          return (<div>
            {
              source.url
              ? <img src={source.url} width='50px' height='50px'></img>
              : <img src={`https://source.unsplash.com/50x50/?${props.name}`}></img>
            }
          </div>)
        })
      }
  </div>
  )
}

export default Preview;