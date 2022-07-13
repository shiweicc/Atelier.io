import React from 'react';
import Preview from './preview.jsx'

var Image = (props) => {
  return (
    <div id='POimage'>
      <Preview sources={props.sources} name={props.name}/>
      {
        props.sources[props.image].url
        ? <img src={props.sources[props.image].url} width='100%' height='100%'></img>
        : <img src={`https://source.unsplash.com/500x500/?${props.name}`}></img>
      }
    </div>
  )
}

export default Image;