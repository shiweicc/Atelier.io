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
      currentCard: this.props.productDesc,
      selectedCard: {},
      productFeature: [],

    }
    this.getRelatedProductList = this.getRelatedProductList.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.findComFeatures = this.findComFeatures.bind(this);
  }

  componentDidMount() {
    // console.log('what props in RelatedProduct ???', this.props.productDesc);
    this.getRelatedProductList(this.props.curProductID);
  }

  openModal(info) {
    this.setState({showModal: true, selectedCard: info}, () => {
      // console.log('**** set state when OPEN showModal ****: ', this.state.selectedCard);
      this.findComFeatures();
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  findComFeatures() {
    // current and selected products' features arrays
    let curProdFeat = this.state.currentCard.features;
    let selProdFeat = this.state.selectedCard.features;

    // create variables for product feactures array and each feact cache object
    let prodFeatData = [];
    let featCache = {};

    //Adding current product's features into cache
    for (let i = 0; i < curProdFeat.length; i++) {
      let curFeature = curProdFeat[i].feature;
      let curValue = curProdFeat[i].value;

      // if feacture's value is true/false, then change it to a checkmark
      if (!curValue) {
        curValue = '✔️';
      }
      featCache[curFeature] = [curValue, null];
    }

    //Adding related product's features into the cache whether it existing or not
    for (let j = 0; j < selProdFeat.length; j++) {
      let selFeature = selProdFeat[j].feature;
      let selValue = selProdFeat[j].value;

      // if feacture's value is true/false, then change it to a checkmark
      if (!selValue) {
        selValue = '✔️';
      }

      if (featCache[selFeature] !== undefined) {
        featCache[selFeature][1] = selValue;
      } else {
        featCache[selFeature] = [null, selValue];
      }
    }

    //push each feature into the products' features array
    for (let key in featCache) {
      let eachFeat = {
        curValue: featCache[key][0],
        feature: key,
        selValue: featCache[key][1],
      }
      prodFeatData.push(eachFeat);
    }

    this.setState({
      productFeature: {
        curProductName:this.props.productDesc.name,
        selProductName: this.state.selectedCard.name,
        feature: prodFeatData,
      },
    }, () => {
      // console.log('**** set state for product Features data ****: ', this.state.productFeature);
    });
  };

  //******************* GET related products info and images *******************//
  getRelatedProductList(id) {
    let relatedIdURL = '/products/' + id + '/related';

    axios.get(relatedIdURL)
    .then(relatedIDList => {
      let result = [];

      for (let i = 0; i < relatedIDList.data.length; i++) {
        let curProductID = relatedIDList.data[i];
        let productURL = `/products/${curProductID}`;

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
        {Object.keys(this.state.productFeature).length === 0
        ? null
        : <Comparing
        showModal={this.state.showModal}
        closeModal={this.closeModal}
        productFeature={this.state.productFeature}
        />
      }
    </div>
    )
  }
}

export default RelatedProducts;



