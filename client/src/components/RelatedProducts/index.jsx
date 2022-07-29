import React from 'react';
import axios from 'axios';
import ProductList from './components/ProductList.jsx';
import OutfitList from './components/OutfitList.jsx';
import AddOutfit from './components/AddOutfit.jsx';
import Comparing from './components/Comparing.jsx';
import products from './sampleData/products.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentCard: this.props.productDesc,
      selectedCard: {},
      productFeature: [],
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.findComFeatures = this.findComFeatures.bind(this);
  }

  componentDidMount() {
    // console.log('what props in RelatedProduct ???', this.props.ratings);
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

  //******************* data manipulation for table *******************//
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

  render() {
    return (
    <div>
      <h3> RELATED PRODUCT </h3>
      <ProductList
        newRelatedProductList={this.props.newRelatedProductList}
        curProductID={this.props.curProductID}
        style={this.props.style} desc={this.props.desc}
        openModal={this.openModal}
        ratings={this.props.ratings}
      />
      <OutfitList
        style={this.props.style} desc={this.props.desc}
        outfitCollection={this.props.outfitCollection}
        addOutfitItem={this.props.addOutfitItem}
        deleteOutfitItem={this.props.deleteOutfitItem}
        updateLocalStorage={this.props.updateLocalStorage}
        ratings={this.props.ratings}
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



