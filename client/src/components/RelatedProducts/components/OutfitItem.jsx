import React from "react";

const OutfitItem = (props) => {
  console.log('props in OutfitItem: ', props);

  let info = props.eachOutfitInfo.productInfo;
  let imgURL = props.eachOutfitInfo.productStyles.results[0].photos[0]["thumbnail_url"];
  let img = (<>
    {
      imgURL ?
      <img src={imgURL} className="card__image" />
      : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
    }
  </>)


  return (
    <div className="outfitCard">
      <div className="outfitCard__body">
        {img}
        <p className="outfitCard__category">{info.category}</p>
        <em className="outfitCard__name">{info.name}</em>
        <p className="outfitCard__price">${info.default_price}</p>
        <p className="outfitCard__rating">⭐⭐⭐⭐⭐</p>
      </div>
      <button className="outfitCard__btn">❌</button>
      {/* <p>__________________________________</p> */}
    </div>
  )
}

export default OutfitItem;