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

  let productInfoImg = {
    productInfo: props.desc,
    productStyles: props.style.results[0].photos[0]["thumbnail_url"],
  };

  const listOutfitItem = props.outfitCollection.map((item) =>
    <OutfitItem
      eachOutfitInfo={item}
      updateOutfitCollection={props.updateOutfitCollection}
      deleteOutfitItem={props.deleteOutfitItem}
      outfitCollection={props.outfitCollection}
    />
  );

  return (
    <div>
      <h3> YOUR OUTFIT </h3>
      <div className="outfitListWrapper">
      {checkOutfitList(outfitCollection)
        ?
        <AddOutfit
        productObj={productInfoImg}
        updateOutfitCollection={props.updateOutfitCollection}
        />
        : <div className="outfitList">{listOutfitItem }</div>
      }
      </div>
    </div>
  )
}

export default OutfitList;

