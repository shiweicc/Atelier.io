import React from 'react';
import arrow from './resources/arrow.png';

const Characteristic = (props) => {

  const amount = (props.value.value / 5)*100;

  const dynamicallyPassedArrowStyling = () => {
    const dynamicArrow = {
      position: `relative`,
      width: `15px`,
      height: `auto`,
      transform: `rotate(180deg)`,
      top: `-5px`,
      marginLeft: `${amount}%`
    }
    return dynamicArrow;
  };

  const qualities = {
    'Size': ['Too small','Perfect','Too large'],
    'Width': ['Too narrow', 'Perfect', 'Too wide'],
    'Comfort': ['Poor', 'Perfect'],
    'Quality': ['Poor', 'Perfect'],
    'Length': ['Too short', 'Perfect', 'Too long'],
    'Fit': ['Poor', 'Perfect']
  }

  return (
    <div class='container'>
      <div class='characteristic'>{props.characteristic}</div>
      <div class='barContainer'>
        <div class='barCharacteristic'></div>
        <div class='barCharacteristic'></div>
        <div class='barCharacteristic'></div>
      </div>
      <div class='barContainer'>
        {qualities[props.characteristic].map((characteristic) => {
          return <div class='quality'>{characteristic}</div>
        })}
      </div>
      <div class='barContainer'>
        <img style={dynamicallyPassedArrowStyling()} src={arrow}></img>
      </div>
    </div>
  )
}

export default Characteristic;