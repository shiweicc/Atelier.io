import React from "react";
import ProductItem from './ProductItem.jsx';

const ProductList = (props) => {
  // console.log('props in ProductList: ', props);

  const listProductItem = props.newRelatedProductList.map((item) =>
    <ProductItem
      eachProductInfo={item}
    />
  );

  return (
    <div>
      {/* <h3> 🏝️ RELATED PRODUCT 🏝️</h3> */}
      <div className="cardList">{listProductItem }</div>
    </div>
  )
}

export default ProductList;


  // const addImage = (relatedProductList, relatedProductStyles) => {
  //   console.log('hey: ', relatedProductList)
  //   console.log('hello: ', relatedProductStyles)

  //   for (let i = 0; i < relatedProductList.length; i++) {
  //     for (let j = 0; j < relatedProductStyles.length; j++) {
  //       if (relatedProductList[i].id === relatedProductStyles[j]["product_id"]) {
  //         relatedProductList[i].imgURL = relatedProductStyles[j].results[0][photos][0]["thumbnail_url"];
  //         console.log('inside the loop i: ',  relatedProductList[i].imgURL )
  //         console.log('inside the loop j: ',  relatedProductStyles[j].results[0][photos][0]["thumbnail_url"])
  //       }
  //     }
  //   }
  //   return relatedProductList;
  // }

  // let newRelatedProductList = addImage(relatedProductList, relatedProductStyles);