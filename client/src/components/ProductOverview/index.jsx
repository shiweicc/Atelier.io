import React from 'react';
import $ from 'jquery';
import Price from './price.jsx';
import Style from './style.jsx';
import Image from './image.jsx';
import Carousel from './carousel.jsx';
import Thumbnail from './thumbnail.jsx';
import SizeNQuantity from './size_quantity.jsx';
import ProductDescription from './productDescription.jsx';
import Stars from '../RnR/RnRComponents/Stars.jsx';
import "./styles.css";



class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 0,
      image: 0,
      start: 0,
      end: 6,
      expanded: false,
      zooomed: false
    }
    this.clickedStyle = this.clickedStyle.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
    this.updateView = this.updateView.bind(this);
  }


  componentDidMount () {
  }

  updateImage (index, start, end) {
    this.setState({
      image: index,
      start,
      end
    })
  }

  clickedStyle (e) {
    let style = e.target.getAttribute('data-styleid');
    if (this.state.style !== style) {
      var position = $(`[data-styleid="${style}"]`).offset();
      var parentPosition = $("#POright").offset();
      $('.POcheckmark').css({ position:'absolute', top:position.top - 40, left: position.left - parentPosition.left + 30});
      this.setState({
        style,
        image: 0
      })
    }
  }

  updateView (view) {
    if (arguments.length === 2) {
      this.setState({
        expanded: !this.state.expanded,
        zoomed: !this.state.zoomed
      })
    } else if (view === 'expand') {
      this.setState({
        expanded: !this.state.expanded
      })
    } else {
      this.setState({
        zoomed: !this.state.zoomed
      })
    }
  }

  updateThumbnail(start, end) {
    this.setState({
      start, end
    })
  }

  render() {
    let index = this.state.style;
    let productInfoImg = {
      productInfo: this.props.desc,
      productImg: this.props.style.results[0].photos[0]["thumbnail_url"] ? this.props.style.results[0].photos[0]["thumbnail_url"] : null,
      productSalePrice: this.props.style.results[0]["sale_price"] ? this.props.style.results[2]["sale_price"]: null,
    };
    return (
      this.props.desc.id && (
        <div id='PO'>
          <div id='POleft'>
            <Thumbnail sources={this.props.style.results[index].photos} expanded={this.state.expanded} image={this.state.image} start={this.state.start} end={this.state.end} updateThumbnail={this.updateThumbnail} updateImage={this.updateImage}/>
            <Carousel sources={this.props.style.results[index].photos} image={this.state.image} update={this.updateImage} start={this.state.start} end={this.state.end} expanded={this.state.expanded} updateView={this.updateView} zoomed={this.state.zoomed}/>
            <ProductDescription desc={this.props.desc.description}/>
          </div>
          <div id='POright'>
            <div id='ratingsReview'>
              <Stars ratings={this.props.review}/>
              <a href='#reviewSection'>Read all {this.props.reviewNum} reviews</a>
            </div>
            <div>
              <p>{this.props.desc.category}</p>
              <h2><strong>{this.props.desc.name}</strong></h2>
              <Price selected={this.props.style.results[index]}/>
            </div>
            <div><strong> Style > </strong>{this.props.style.results[index].name}</div>
            <Style styles={this.props.style.results} name={this.props.desc.name} handleClick={this.clickedStyle}/>
            <SizeNQuantity skus={this.props.style.results[index].skus} addOutfit={this.props.addOutfit} product={productInfoImg}/>
          </div>
        </div>
        )
    )
  }
}

export default ProductOverview;