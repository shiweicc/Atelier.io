import React from 'react';
import $ from 'jquery';

class SizeNQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      showSizes: false,
      chosenSize: 'Select Size',
      stock: [],
      showStock: false,
      chosenStock: '-'
    }
    this.clickedSize = this.clickedSize.bind(this);
    this.clickedStock = this.clickedStock.bind(this);
    this.clickedSizeOption = this.clickedSizeOption.bind(this);
    this.clickedStockOption = this.clickedStockOption.bind(this);
  }

  clickedSize (e) {
    let options = $('#POsize-options');
    if (!this.state.showSizes) {
      options.css('display', 'block');
      this.setState({
        showSizes: !this.state.showSizes
      })
    } else {
      options.css('display', 'none');
      this.setState({
        showSizes: !this.state.showSizes
    })
    }
  }

  clickedStock (e) {
    let options = $('#POquantity-options');
    if (!this.state.showStock) {
      options.css('display', 'block');
      this.setState({
        showStock: !this.state.showStock
      })
    } else {
      options.css('display', 'none');
      this.setState({
        showStock: !this.state.showStock
      })
    }
  }

  clickedSizeOption(e) {
    let selectedSize = e.target.innerHTML;
    this.clickedSize();
    let stock = [];
    let currentStock;
    for (var [key, value] of Object.entries(this.props.skus)) {
      let size = value.size;
      let quantity = value.quantity;
      if (size === selectedSize) {
        currentStock = quantity;
      }
    }
    let max = currentStock < 15 ? currentStock : 15;
    for (var i = 0; i < max; i ++) {
      stock.push(1);
    }
    this.setState({
      chosenSize: e.target.innerHTML,
      stock,
      chosenStock: '-'
    })
  }

  clickedStockOption(e) {
    let selectedQuant = e.target.innerHTML;
    this.setState({
      chosenStock: selectedQuant
    })
    this.clickedStock();
  }

  componentDidMount () {
    let skus = this.props.skus;
    let sizes = [];
    for (var sku in skus) {
      if (skus[sku].size) {
        sizes.push(skus[sku].size);
      }
    }
    this.setState({
      sizes
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.skus !== prevProps.skus) {
      let skus = this.props.skus;
      let sizes = [];
      for (var sku in skus) {
        if (skus[sku].size) {
          sizes.push(skus[sku].size);
        }
      }
      this.setState({
        sizes,
        showStock: false,
        showSizes: false,
        chosenSize: 'Select Size',
        stock: [],
        chosenStock: '-'
      });
    }
  }

  render () {
    return (
      <div id='POAddButtons'>
        <div id='POsizeNQuantity'>
          <div id='POsize'>
          {/* <label>Size: </label> */}
            {
              this.state.sizes.length !== 0
                ? <button class='dropdown' id='POsize-button' onClick={this.clickedSize}>{this.state.chosenSize}</button>
                : <button class='dropdown' id='POsize-button' onClick={this.clickedSize}>OUT OF STOCK</button>
            }
            <div class='dropdown-options' id='POsize-options' onClick={this.clickedSizeOption}>
              {
                this.state.sizes.map((size) => {
                  return <div key={size}>{size}</div>
                })
              }
            </div>
          </div>
          <div id='POquantity'>
            {/* <label>Qauntity: </label> */}
            <button class='dropdown' id='POquantity-button' onClick={this.clickedStock}>{this.state.chosenStock}</button>
            <div class='dropdown-options' id='POquantity-options' onClick={this.clickedStockOption}>
              {
                this.state.stock.map((value, index) => {
                  return <div key={index}>{index + 1}</div>
                })
              }
            </div>
          </div>
        </div>
        <div id='POAddBottom'>
          <button id='POaddToBag'>ADD TO BAG</button>
          <button id='POstar'>&#9733;</button>
        </div>
      </div>
    )
  }
}

export default SizeNQuantity;