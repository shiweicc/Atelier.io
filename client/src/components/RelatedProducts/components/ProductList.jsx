import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  let productInfoImg = [{
    productInfo: props.desc,
    productStyles: props.style,
  }]

  const listProductItem = props.newRelatedProductList.map((item, index) =>
    <ProductItem
      curProductID={props.curProductID}
      eachProductInfo={item}
      openModal={props.openModal}
      key={index}
      updateProductId={props.updateProductId}
    />
  );

  return (
      <div className="productCardList">{listProductItem }</div>
  )
}

export default ProductList;


