import React from "react";
import styles from '../sampleData/product_id_styles.js';
import helper from '../helpers/helpers.js';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedProductId: 0,
    }
    this.getSelectedCard = this.getSelectedCard.bind(this);
    this.updateURLtoClickedProduct = this.updateURLtoClickedProduct.bind(this);
    this.updateClickedProductId = this.updateClickedProductId.bind(this);
  }

  componentDidMount() {
    // console.log('id in state: ', this.state.clickedProductId)
  }

  updateClickedProductId() {
    let id = this.props.eachProductInfo.productInfo.id;
    this.setState({clickedProductId: id}, (id) => {
      // console.log('**** set state for productId ****: ', this.state.clickedProductId);
      this.updateURLtoClickedProduct(this.state.clickedProductId);
    })
  }

  updateURLtoClickedProduct(id) {
    window.location.href = `http://localhost:3000/productpage/${id}/`;
  }

  getSelectedCard() {
    let info = this.props.eachProductInfo.productInfo;
    this.props.openModal(info);
  }

  render() {
    let curProductId = this.props.eachProductInfo.productInfo.id;
    let info = this.props.eachProductInfo.productInfo;
    let imgURL = this.props.eachProductInfo.productStyles.results[0].photos[0]["thumbnail_url"];
    let salePrice = this.props.eachProductInfo.productStyles.results[0]["sale_price"];

    let img = (<>
      {
        imgURL ?
        <img src={imgURL} className="card__image"
        onClick={this.updateClickedProductId}/>
        : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"
        onClick={this.updateClickedProductId}/>
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
          <button className="card_btn" onClick={this.getSelectedCard}>⭐</button>
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