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
      comProdFeat: [],
      // curProdFeat:[],
      // selProdFeat:[],
    }
    this.getRelatedProductList = this.getRelatedProductList.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.findComFeatures = this.findComFeatures.bind(this);
    this.deleteComFeatures = this.deleteComFeatures.bind(this);
    this.combineCurFeatrues = this.combineCurFeatrues.bind(this);
    this.combineSelFeatrues = this.combineSelFeatrues.bind(this);
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
    // console.log('currentCard info: ', this.props.productDesc);
    this.setState({
      showModal: false,
      selectedCard: {},
      comProdFeat: [],
      curProdFeat: [],
      selProdFeat: [],
      currentCard: this.props.productDesc,
    },
    () => {
      console.log('**** set state for currentCard when CLOSE showModal ****: ', this.state.currentCard);
    });
  }

  findComFeatures() {
    let curProdFeat = this.state.currentCard.features;
    let selProdFeat = this.state.selectedCard.features;
    let curTemp = curProdFeat;
    let selTemp = selProdFeat;
    let comProdFeat = [];

    if (this.state.currentCard.id === this.state.selectedCard.id) {
      for (let k = 0; k < curProdFeat.length; k++) {
          comProdFeat.push({
            curValue: curProdFeat[k].value,
            feature: curProdFeat[k].feature,
            selValue: curProdFeat[k].value,
          })
        }
    } else if (selProdFeat.length === 0) {
      console.log('yes');
    } else {
      let count = 0;
      for (let i = 0; i < curProdFeat.length; i++) {
        for (let j = 0; j < selProdFeat.length; j++) {
          if (curProdFeat[i].feature === selProdFeat[j].feature) {
            comProdFeat.push({
              curValue: curProdFeat[i].value,
              feature: curProdFeat[i].feature,
              selValue: selProdFeat[j].value
            })
            count++;
          }
        }
      }
      if (count === curProdFeat.length && count === selProdFeat.length) {
        for (let k = 0; k < curProdFeat.length; k++) {
          comProdFeat.push({
            curValue: curProdFeat[k].value,
            feature: curProdFeat[k].feature,
            selValue: curProdFeat[k].value,
          })
        }
      } else {
        this.deleteComFeatures(comProdFeat, curTemp);
        this.deleteComFeatures(comProdFeat, selTemp);

        this.combineCurFeatrues(comProdFeat, curTemp);
        this.combineSelFeatrues(comProdFeat, selTemp);
      }
    }


    this.setState({
      comProdFeat: comProdFeat,
      // curProdFeat: curProdFeat,
      // selProdFeat: selProdFeat,
      },
      () => {
      console.log('**** set state after find comFeat for currentCard ****: ', this.state.currentCard);
      // console.log('**** set state after find comFeat for selectedCard ****: ', this.state.selectedCard);
    });

  };

  deleteComFeatures(comProdFeat, checkProdFeat) {
    for (let i = 0; i < checkProdFeat.length; i++) {
      for (let j = 0; j < comProdFeat.length; j++) {
        if (checkProdFeat[i].feature === comProdFeat[j].feature) {
          checkProdFeat.splice(i, 1);
        }
      }
    }
    return checkProdFeat;
  }

  combineCurFeatrues(comProdFeat, curProdFeat) {
    for (let i = 0; i < curProdFeat.length; i++) {
      if (!curProdFeat[i].value) {
        curProdFeat[i].value = '✔️';
      }
      comProdFeat.push({
        curValue: curProdFeat[i].value,
        feature: curProdFeat[i].feature,
        selValue: null,
      })
    }
  }

  combineSelFeatrues(comProdFeat, selProdFeat) {
    for (let i = 0; i < selProdFeat.length; i++) {
      if (!selProdFeat[i].value) {
        selProdFeat[i].value = '✔️';
      }
      comProdFeat.push({
        curValue: null,
        feature: selProdFeat[i].feature,
        selValue: selProdFeat[i].value,
      })
    }
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
        {this.state.comProdFeat.length === 0
        ? null
        : <Comparing
        showModal={this.state.showModal}
        closeModal={this.closeModal}
        currentCard={this.state.currentCard}
        selectedCard={this.state.selectedCard}
        comProdFeat={this.state.comProdFeat}
        curProdFeat={this.state.curProdFeat}
        selProdFeat={this.state.selProdFeat}
        />
      }
    </div>
    )
  }
}

export default RelatedProducts;


// {Object.keys(this.state.selectedCard).length === 0
//   ? null
//   : <Comparing
//   showModal={this.state.showModal}
//   closeModal={this.closeModal}
//   currentCard={this.state.currentCard}
//   selectedCard={this.state.selectedCard}
//   comProdFeat={this.state.comProdFeat}
//   curProdFeat={this.state.curProdFeat}
//   selProdFeat={this.state.selProdFeat}
//   />
// }


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
