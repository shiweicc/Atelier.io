import React from "react";
import Stars from '../../RnR/RnRComponents/Stars.jsx';

class OutfitItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('props in OutfitItem: ', this.props.eachOutfitInfo);
  }

  handleDeleteOutfit(e, outfitCollection) {
    e.preventDefault();
    let selectedProductID = this.props.eachOutfitInfo.productInfo.id;

    for (let i = 0; i < outfitCollection.length; i++) {
      let curID = outfitCollection[i].productInfo.id;
      if (curID === selectedProductID) {
        outfitCollection.splice(i, 1);
      }
    }
    this.props.deleteOutfitItem(outfitCollection, this.props.eachOutfitInfo.productInfo.id);
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
        <div className="card_price_wrapper">
          <p className="card_sale_price">${salePrice}</p>
          <p className="card_default_price">${info.default_price}</p>
        </div>
        : <p className="card_price">${info.default_price}</p>
      }
      </>
    )

    return (
      <div className="eachOutfitCard">
        <div className="card_body">
          <button className="card_btn" onClick={(e) => this.handleDeleteOutfit(e, this.props.outfitCollection)}>❌</button>
          {img}
          <p className="card_category">{info.category}</p>
          <em className="card_name">{info.name}</em>
          {price}
          {/* <p className="card_rating">⭐⭐⭐⭐⭐</p> */}
          <Stars ratings={this.props.ratings}/>
        </div>
      </div>
    )
  }
}

export default OutfitItem;