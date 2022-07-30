import React from 'react';

const ModalCharacteristic = (props) => {
  for (let i = 0; i < props.characteristics.length; i++) {
    if (props.characteristics[i].characteristic === props.characteristic) {
      return (
        <div className='ModalCharacteristicDescription'>
          <span className='TinyText'>{props.characteristics[i].low}</span>
          <span className='TinyText'>{props.characteristics[i].medium}</span>
          <span className='TinyText'>{props.characteristics[i].high}</span>
        </div>
      )
    }
  }
}

export default ModalCharacteristic;