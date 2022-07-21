import React from 'react';
import $ from 'jquery';
import Price from './price.jsx';
import Style from './style.jsx';
import Image from './image.jsx';
import Carousel from './carousel.jsx';
import Thumbnail from './thumbnail.jsx';
import "./styles.css";


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 0,
      image: 0,
      start: 0,
      end: 6
    }
    this.clickedStyle = this.clickedStyle.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
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
      $('.POcheckmark').css({ position:'absolute', top:position.top - 30, left: position.left + 35});
      this.setState({
        style,
        image: 0
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
    return (
      this.props.desc.id && (<div id='PO'>
        <div id='POleft'>
          <Thumbnail sources={this.props.style.results[index].photos} image={this.state.image} start={this.state.start} end={this.state.end} updateThumbnail={this.updateThumbnail} updateImage={this.updateImage}/>
          <Carousel sources={this.props.style.results[index].photos} image={this.state.image} update={this.updateImage} start={this.state.start} end={this.state.end}/>
        </div>
        <div id='POright'>
          <p>{this.props.desc.category}</p>
          <h2><strong>{this.props.desc.name}</strong></h2>
          <Price selected={this.props.style.results[index]}/>
          <div>Style: {this.props.style.results[index].name}</div>
          <Style styles={this.props.style.results} name={this.props.desc.name} handleClick={this.clickedStyle}/>
        </div>
      </div>)
    )
  }
}

export default ProductOverview;