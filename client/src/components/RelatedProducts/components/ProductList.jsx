import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  const listProductItem = props.products.map((item) =>
    <ProductItem
      eachProductInfo={item}
    />
  );

  return (
    <div>
      <h3> ~~~ This is ProductList Component! ~~~</h3>
      {listProductItem }
    </div>
  )
}

export default ProductList;