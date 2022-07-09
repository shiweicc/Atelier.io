import React from 'react';
import Preview from './preview.jsx'

var Image = (props) => {
  return (
    <div id='image' style={{'display': 'flex', 'flex-direction': 'row'}}>
      <Preview sources={props.sources} name={props.name}/>
      {
        props.sources[props.image].url
        ? <img src={props.sources[props.image].url} width='500px' height='500px'></img>
        : <img src={`https://source.unsplash.com/500x500/?${props.name}`}></img>
      }
    </div>
  )
}

export default Image;