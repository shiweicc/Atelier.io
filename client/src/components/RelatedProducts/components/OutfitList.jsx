import React from "react";
import OutfitItem from './OutfitItem.jsx';
import AddOutfit from './AddOutfit.jsx';

const OutfitList = (props) => {
  // console.log('props in OutfitList: ', props.outfitCollection)

  // check if outfitList is empty
  // let outfitCollection = props.outfitCollection;
  // let checkOutfitList = ((outfitCollection) => {
  //   if (Array.isArray(outfitCollection) && outfitCollection.length === 0) {
  //     return true;
  //   }
  // });

  let productInfoImg = {
    productInfo: props.desc,
    productImg: props.style.results[0].photos[0]["thumbnail_url"],
    productSalePrice: props.style.results[0]["sale_price"],
  };

  const listOutfitItem = props.outfitCollection.map((item, index) =>
    <OutfitItem
      eachOutfitInfo={item}
      deleteOutfitItem={props.deleteOutfitItem}
      outfitCollection={props.outfitCollection}
      key={index}
    />
  );

  return (
    <div>
      <h3> YOUR OUTFIT </h3>
      <div className="outfitListWrapper">
        <AddOutfit
        productObj={productInfoImg}
        addOutfitItem={props.addOutfitItem}
        updateLocalStorage={props.updateLocalStorage}
        />
        {props.outfitCollection.length === 0
        ? null
        : <div className="outfitCardList">{listOutfitItem }</div>
        }
        {/* <div className="outfitCardList">{listOutfitItem }</div> */}
      </div>
    </div>
  )
}

export default OutfitList;

//

