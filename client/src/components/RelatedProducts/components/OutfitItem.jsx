import React from "react";

class OutfitItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handleDeleteOutfit(outfitCollection) {
    let selectedProductID = this.props.eachOutfitInfo.productInfo.id;

    for (let i = 0; i < outfitCollection.length; i++) {
      let curID = outfitCollection[i].productInfo.id;
      if (curID === selectedProductID) {
        outfitCollection.splice(i, 1);
      }
    }
    this.props.deleteOutfitItem(outfitCollection);
  }

  render() {
    let info = this.props.eachOutfitInfo.productInfo;
    let imgURL = this.props.eachOutfitInfo.productImg;
    let salePrice = this.props.eachOutfitInfo.productSalePrice;

    let img = (<>
      {
        imgURL ?
        <img src={imgURL} className="card__image" />
        : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
      }
    </>)

    let price = (
      <>
      {
        salePrice ?
        <>
          <p className="card_sale_price">${salePrice}</p>
          <p className="card_default_price">${info.default_price}</p>
        </>
        : <p className="card_price">${info.default_price}</p>
      }
      </>
    )

    return (
      <div className="eachOutfitCard">
        <div className="card_body">
          <button className="card_btn" onClick={() => this.handleDeleteOutfit(this.props.outfitCollection)}>❌</button>
          {img}
          <p className="card_category">{info.category}</p>
          <em className="card_name">{info.name}</em>
          {price}
          <p className="card_rating">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    )
  }
}

export default OutfitItem;