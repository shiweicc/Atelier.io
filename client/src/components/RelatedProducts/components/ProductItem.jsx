import React from "react";
const styles = require ('../sampleData/product_id_styles.js');
const helper = require ('../helpers/helpers.js');

const ProductItem = (props) => {
  console.log('props in ProdcutItem: ', props);
  console.log('styleObj: ', styles.product_id_styles);

  // useing sample data to get image URL
  let stylesObj = styles.product_id_styles;
  let url = helper.getImage(stylesObj);


  // GET request for styles Obj and get the image URL

  return (
    <div>
      <img src={url} /><br></br>
      <em>{props.eachProductInfo.name}</em>
      <p>${props.eachProductInfo.default_price}</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>__________________________________</p>
    </div>
  )
}

export default ProductItem;