import React from 'react';
import ProductList from './components/ProductList.jsx';
import OutfitList from './components/OutfitList.jsx';
import AddOutfit from './components/AddOutfit.jsx';
import Comparing from './components/Comparing.jsx';
import axios from 'axios';
const products = require ('./sampleData/products.js');
const helper = require ('./helpers/helpers.js');

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRelatedProductList:[],
      outFitList: [],
    }
    this.getRelatedProductList = this.getRelatedProductList.bind(this);
    // this.getRelatedProductObj = this.getRelatedProductObj.bind(this);
    // this.getCurProduct = this.getCurProduct.bind(this);
  }

  componentDidMount() {
    // console.log('what ?', this.props);
    this.getRelatedProductList(this.props.curProductID);
  }

  //******************* GET related products info and images *******************//
  getRelatedProductList(id) {
    let relatedIdURL = '/products/' + id + '/related';

    axios.get(relatedIdURL)
    .then(relatedIDList => {
      let result = [];

      for (var i = 0; i < relatedIDList.data.length; i++) {
        let curProduct = relatedIDList.data[i];
        var productURL = `/products/${relatedIDList.data[i]}`;

        axios.get(productURL)
          .then(productInfo => {
            let styleURL =  `/products/${curProduct}/styles`;

            axios.get(styleURL)
            .then(productStyles => {

              result.push({
                productInfo: productInfo.data,
                productStyles: productStyles.data,
              })

              this.setState({newRelatedProductList: [...result]}, () => {
                // console.log('****set state for relatedProductSTYLES****: ', this.state.newRelatedProductList);
              })
            })
            .catch(err => console.log('fail get product styles at client!', err))
          })
          .catch(err => console.log('fail to get product info at client!', err))
      }
    })
    .catch(err => {
        console.log('fail get related products data at client!!!', err);
    })
  }

  //******************* get realted product STYLES list *******************//
  // getRelatedProductStyles(id) {
  //   let url = '/products/' + id + '/styles';

  //   axios.get(url)
  //   .then(data => {
  //     // console.log('success get related products data at client!', data.data)

  //     let result = [];
  //     for (var i = 0; i < data.data.length; i++) {
  //       var url = `/products/${data.data[i]}`;
  //       axios.get(url)
  //         .then(data => {
  //           console.log('STYLES data: ', data.data)
  //           result.push(data.data)

  //           this.setState({relatedProductStyles: [...result]}, () => {
  //             console.log('****set state for relatedProductIDList****: ', this.state.relatedProductStyles);
  //           });
  //         });
  //     }
  //   })
  //   .catch(err => {
  //       console.log('fail get related products STYLES data at client!!!', err);
  //   })
  // }

  //******************* get each product info *******************//
  // getCurProduct(id) {
  //   let url = '/products/' + id;

  //   axios.get(url)
  //   .then(data => {
  //     console.log('success get current product data at client!', data.data);
  //     this.setState({ relatedProductIDList: [...this.state.relatedProductIDList, data.data] });
  //   })
  //   .catch(err => {
  //     console.log('fail get current product data at client!', err);
  //   })
  // }

  //******************* get realted products list *******************//
  // getRelatedProductObj(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let id = arr[i];
  //     let obj = this.getCurProduct(id);
  //     console.log('obj: ', obj);
  //     result.push(obj);
  //   }
  //   return result;
  // }



  render() {
    return (
    <div>
      <p>__________________________________</p>
      {/* <h2>⛱️⛱️⛱️ Related Products 🛼🛼🛼</h2> */}
      <ProductList
        newRelatedProductList={this.state.newRelatedProductList}
        curProductID={this.props.curProductID}
      />
      <OutfitList />
      {/* <AddOutfit /> */}
      {/* <Comparing /> */}
    </div>
    )
  }
}

export default RelatedProducts;