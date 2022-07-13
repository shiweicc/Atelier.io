import React from "react";
import OutfitItem from './OutfitItem.jsx';
import AddOutfit from './AddOutfit.jsx';

const OutfitList = (props) => {
  return (
    <div className="outfitListWrapper">
      <h3> 🛍️ YOUR OUTFIT 🛍️ </h3>
      <AddOutfit />
      <OutfitItem />
    </div>
  )
}

export default OutfitList;