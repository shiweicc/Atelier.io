import React from 'react';

const Bar = (props) => {

  const innerStyle = {
    position: `relative`,
    display: `inline-block`,
    alignItems: `right`,
    backgroundColor: `black`,
    width: `${props.rating}%`,
    height: `18px`,
    zIndex: 99
  };

  return (
    <div class='container'>
      <div class='bar'>
        <div style={innerStyle}>
        </div>
      </div>
    </div>
  )
}

export default Bar;