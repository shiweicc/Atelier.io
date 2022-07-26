import React from 'react';

const ProductDescription = (props) => {
  if (props.desc !== null) {
    return (<div>
      <p id='POdescription'>{props.desc}</p>
    </div>)
  }
}

export default ProductDescription;