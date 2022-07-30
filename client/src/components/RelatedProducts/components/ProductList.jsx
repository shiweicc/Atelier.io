import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  // console.log('what props in ProductList: ', props.ratings);

  let productInfoImg = [{
    productInfo: props.desc,
    productStyles: props.style,
  }]

  const listProductItem = props.newRelatedProductList.map((item, index) =>
    <ProductItem
      key={index}
      curProductID={props.curProductID}
      eachProductInfo={item}
      openModal={props.openModal}
      updateProductId={props.updateProductId}
      ratings={props.ratings}
    />
  );

  return (
      <div className="productCardList">{listProductItem }</div>
  )
}

export default ProductList;


