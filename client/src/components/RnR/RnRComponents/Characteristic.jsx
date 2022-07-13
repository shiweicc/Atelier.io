import React from 'react';

const Characteristic = (props) => {
  return (
    <div>
      {props.characteristic} {props.value.value}
    </div>
  )
}

export default Characteristic;