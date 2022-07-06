import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  console.log('props in ProductList: ', props);

  const listProductItem = props.products.map((item) =>
    <ProductItem
      eachProductInfo={item}
    />
  );

  return (
    <div>
      <h3> 🏝️ RELATED PRODUCT 🏝️</h3>
      {listProductItem }
    </div>
  )
}

export default ProductList;