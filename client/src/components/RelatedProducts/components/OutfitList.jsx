import React from "react";
import OutfitItem from './OutfitItem.jsx';
import AddOutfit from './AddOutfit.jsx';

const OutfitList = (props) => {
  // console.log('props in OutfitList: ', props.outfitCollection);

  // check if outfitList is empty
  let outfitCollection = props.outfitCollection;
  let checkOutfitList = ((outfitCollection) => {
    if (Array.isArray(outfitCollection) && outfitCollection.length === 0) {
      return true;
    }
  });

  let productInfoImg = [{
    productInfo: props.desc,
    productStyles: props.style,
  }]

  const listOutfitItem = props.outfitCollection.map((item) =>
    <OutfitItem
      eachOutfitInfo={item}
      updateOutfitCollection={props.updateOutfitCollection}
    />
  );

  return (
    <div className="outfitListWrapper">
      <h3> 🛍️ YOUR OUTFIT 🛍️ </h3>
      {checkOutfitList(outfitCollection)
        ?
        <AddOutfit
        productObj={productInfoImg}
        updateOutfitCollection={props.updateOutfitCollection}
        />
        : <div className="outfitList">{listOutfitItem }</div>
      }
    </div>
  )
}

export default OutfitList;

