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
    <div className='characteristicContainer'>
      <div className='characteristic'>{props.characteristic}</div>
      <div className='barContainer'>
        <div className='barCharacteristic'></div>
        <div className='barCharacteristic'></div>
        <div className='barCharacteristic'></div>
      </div>
      <div className='barContainer'>
        {qualities[props.characteristic].map((characteristic, i) => {
          return <div key={i} className='quality'>{characteristic}</div>
        })}
      </div>
      <div className='barContainer'>
        <img style={dynamicallyPassedArrowStyling()} src={arrow} alt='Arrow marker pointing at bar graph'></img>
      </div>
    </div>
  )
}

export default Characteristic;