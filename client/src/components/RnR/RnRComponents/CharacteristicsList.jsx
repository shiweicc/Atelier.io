import React from 'react';
import Characteristic from './Characteristic.jsx';

const CharacteristicsList = (props) => {
  return (
    <div>
      {Object.keys(props.characteristics).map((key, i) => {
        return <Characteristic key={i} characteristic={key} value={props.characteristics[key]}/>
      })}
    </div>
  )
}

export default CharacteristicsList;