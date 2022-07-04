import React from "react";

const ProductItem = (props) => {
  console.log('props in prodcutItem: ', props);

  return (
    <div>
      <p>{props.eachProductInfo.category}</p>
      <em>{props.eachProductInfo.name}</em>
      <p>${props.eachProductInfo.default_price}</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>__________________________________</p>
    </div>
  )
}

export default ProductItem;