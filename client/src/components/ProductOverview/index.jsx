import React from 'react';
import $ from 'jquery';
import Price from './price.jsx';
import Style from './style.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 2
    }
  }

  componentDidMount () {
  }

  render() {
    let index = this.state.style;
    return (
      this.props.desc.id && (<div>
        <img src={this.props.style.results[index].photos[index]['url']} height='400px'></img>
        <p>Name: {this.props.desc.name}</p>
        <Price selected={this.props.style.results[index]}/>
        <Style styles={this.props.style.results}/>
      </div>)
    )
  }
}

export default ProductOverview;