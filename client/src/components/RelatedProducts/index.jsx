import React from 'react';
import axios from 'axios';
import ProductList from './components/ProductList.jsx';
import OutfitList from './components/OutfitList.jsx';
import AddOutfit from './components/AddOutfit.jsx';
import Comparing from './components/Comparing.jsx';
import products from './sampleData/products.js';
import helper from './helpers/helpers.js';
// import css from '../../../dist/style.css';


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRelatedProductList:[],
      showModal: false,
      selectedCard: {},
      currentCard: this.props.productDesc,
    }
    this.getRelatedProductList = this.getRelatedProductList.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    console.log('what props in RelatedProduct ???', this.props.productDesc);
    this.getRelatedProductList(this.props.curProductID);
  }

  openModal(info) {
    console.log('openModal info: ', info);

    this.setState({showModal: true, selectedCard: info}, () => {
      console.log('**** set state when OPEN showModal ****: ', this.state.selectedCard);
    });
  }

  closeModal() {
    this.setState({showModal: false, selectedCard: {}}, () => {
      console.log('**** set state when CLOSE showModal ****: ', this.state.showModal);
    });
  }

  //******************* GET related products info and images *******************//
  getRelatedProductList(id) {
    let relatedIdURL = '/products/' + id + '/related';

    axios.get(relatedIdURL)
    .then(relatedIDList => {
      let result = [];

      for (var i = 0; i < relatedIDList.data.length; i++) {
        let curProductID = relatedIDList.data[i];
        var productURL = `/products/${curProductID}`;

        axios.get(productURL)
          .then(productInfo => {
            let styleURL =  `/products/${curProductID}/styles`;

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


  render() {
    return (
    <div>
      <h3> RELATED PRODUCT </h3>
      <ProductList
        newRelatedProductList={this.state.newRelatedProductList}
        curProductID={this.props.curProductID}
        updateOutfitCollection={this.props.updateOutfitCollection}
        style={this.props.style} desc={this.props.desc}
        openModal={this.openModal}
      />
      <OutfitList
        curProductID={this.props.curProductID}
        outfitCollection={this.props.outfitCollection}
        newRelatedProductList={this.state.newRelatedProductList}
        updateOutfitCollection={this.props.updateOutfitCollection}
        deleteOutfitItem={this.props.deleteOutfitItem}
        style={this.props.style} desc={this.props.desc}
      />
        {Object.keys(this.state.selectedCard).length === 0
        ? null
        : <Comparing
        showModal={this.state.showModal}
        closeModal={this.closeModal}
        currentCard={this.state.currentCard}
        selectedCard={this.state.selectedCard}
        />
      }
    </div>
    )
  }
}

export default RelatedProducts;


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


 //******************* GET related products info and images (USE Promise.all) *******************//
  // getRelatedProductList(id) {
  //   let relatedIdURL = '/products/' + id + '/related';

  //   axios.get(relatedIdURL)
  //   .then(relatedIDList => {
  //     let result = [];
  //     let getInfoArr = [];

  //     for (let i = 0; i < relatedIDList.data.length; i++) {
  //       let curProductID = relatedIDList.data[i];
  //       // .map -> an array of productID
  //       var productURL = `/products/${curProductID}`;
  //       getInfoArr.push(axios.get(productURL));
  //     }

  //     Promise.all(getInfoArr)
  //     .then(data => {
  //       let productInfoArr = data;
  //       let getStylesArr = [];

  //       console.log('product info array: ', productInfoArr);

  //       for (let i = 0; i < productInfoArr.length; i++) {
  //         let productID = productInfoArr[i].data.id;
  //         let styleURL =  `/products/${productID}/styles`;
  //         getStylesArr.push(axios.get(styleURL));
  //       }

  //       Promise.all(getStylesArr)
  //       .then(data => {
  //         let productStylesArr = data;
  //         console.log('product styles array: ', productStylesArr);

  //         result.push({
  //           productInfo: productInfoArr,
  //           productStyles: productStylesArr,
  //         })

  //         this.setState({newRelatedProductList: [...result]}, () => {
  //           console.log('****set state for relatedProductSTYLES****: ', this.state.newRelatedProductList);
  //         })
  //       })
  //       .catch(err => console.log('fail get product styles at client!', err))
  //     })
  //     .catch(err => console.log('fail to get product info at client!', err))
  //   })
  //   .catch(err => {
  //       console.log('fail get related products data at client!!!', err);
  //   })
  // }
