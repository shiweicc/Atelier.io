import React from 'react';
import ProductList from './components/ProductList.jsx';
import OutfitList from './components/OutfitList.jsx';
import AddOutfit from './components/AddOutfit.jsx';
import Comparing from './components/Comparing.jsx';
const products = require ('./sampleData/products.js');


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: products.productList,
      relatedProductsID: [],
      outFitList: [],
    }
  }

  componentDidMount() {
    // console.log('what ?', this.state.productList);
  }

  render() {
    return (
    <div>
      <p>__________________________________</p>
      <h2>⛱️⛱️⛱️ Related Products 🛼🛼🛼</h2>
      <ProductList products={this.state.productList} curProductID={this.props.curProductID}/>
      <OutfitList />
      <AddOutfit />
      <Comparing />
    </div>
    )
  }
}

export default RelatedProducts;