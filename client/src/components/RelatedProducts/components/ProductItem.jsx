import React from "react";
import styles from '../sampleData/product_id_styles.js';
import Stars from '../../RnR/RnRComponents/Stars.jsx';

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
    // console.log('what props in ProductItem:  ', this.props.ratings)
  }

  updateClickedProductId() {
    let id = this.props.eachProductInfo.productInfo.id;
    this.setState({clickedProductId: id}, (id) => {
      this.updateURLtoClickedProduct(this.state.clickedProductId);
    })
  }

  updateURLtoClickedProduct(id) {
    let temp = window.location.href;
    let endpoint = temp.slice(0, temp.length - 6);
    let URL = endpoint + id;
    window.location.href = URL;
  }

  getSelectedCard(e) {
    e.preventDefault();
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
          <button className="card_btn" onClick={(e)=>this.getSelectedCard(e)}>⭐</button>
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

export default ProductItem;