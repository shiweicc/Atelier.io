import React from "react";
import styles from '../sampleData/product_id_styles.js';
import helper from '../helpers/helpers.js';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('obj: ', this.props.productObj)
    // console.log('func: ', this.props.updateOutfitCollection);
  }

  handleAddOutfit() {
    let selectedInfo = this.props.eachProductInfo.productInfo;
    let selectedStyles = this.props.eachProductInfo.productStyles.results[0].photos[0]["thumbnail_url"];

    let selectedProductObj = {
      productInfo: selectedInfo,
      productStyles: selectedStyles,
    };

    this.props.updateOutfitCollection(selectedProductObj);
  }

  render() {
    let info = this.props.eachProductInfo.productInfo;
    let imgURL = this.props.eachProductInfo.productStyles.results[0].photos[0]["thumbnail_url"];
    let salePrice = this.props.eachProductInfo.productStyles.results[0]["sale_price"];

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
      <div className="eachProductCard">
        <div className="card_body">
          <button className="card_btn" onClick={()=> this.handleAddOutfit()}>❤️</button>
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

export default ProductItem;