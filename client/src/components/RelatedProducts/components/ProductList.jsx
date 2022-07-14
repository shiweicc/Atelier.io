import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  // console.log('props in ProductList: ', props);
  let productInfoImg = [{
    productInfo: props.desc,
    productStyles: props.style,
  }]

  const listProductItem = props.newRelatedProductList.map((item) =>
    <ProductItem
      curProductID={props.curProductID}
      eachProductInfo={item}
      updateOutfitCollection={props.updateOutfitCollection}
    />
  );

  return (
    <div className="productListWrapper">
      <div className="cardList">{listProductItem }</div>
    </div>
  )
}

export default ProductList;


