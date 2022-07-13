import React from 'react';
import $ from 'jquery';
import Price from './price.jsx';
import Style from './style.jsx';
import Image from './image.jsx';
import "./styles.css";

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 1,
      image: 0
    }
    this.clickedStyle = this.clickedStyle.bind(this);
  }


  componentDidMount () {
  }

  clickedStyle (e) {
    let style = e.target.getAttribute('data-styleid');
    if (this.state.style !== style) {
      var position = $(`[data-styleid="${style}"]`).offset();
      $('.POcheckmark').css({ position:'absolute', top:position.top - 30, left: position.left + 35});
      this.setState({
        style
      })
    }
  }

  render() {
    let index = this.state.style;
    return (
      this.props.desc.id && (<div id='PO'>
        <div id='POleft'>
          <Image sources={this.props.style.results[index].photos} name={this.props.desc.name} image={this.state.image}/>
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