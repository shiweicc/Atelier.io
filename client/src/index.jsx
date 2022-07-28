import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProducts from './components/RelatedProducts/index.jsx';
import QnA from './components/QnA/index.jsx';
import RnR from './components/RnR/index.jsx';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: window.location.href.split('/').slice(-2, -1)[0],
      productDesc: {},
      productStyle: {},
      reviews: [],
      reviewsMetadata: [],
      reviewsSort: 'relevant',
      sortOptions: ['relevant', 'newest', 'helpful'],
      reviewsCount: 'Not expanded',
      averageReviewScore: 0,
      reviewID: 0,
      outfitCollection: [],
      newRelatedProductList:[],
      ready: false
    }
    this.getProducts = this.getProducts.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
    this.averageReviewScore = this.averageReviewScore.bind(this);
    this.setReviewsCount = this.setReviewsCount.bind(this);
    this.setSortOptions = this.setSortOptions.bind(this);
    this.postHelpfulReview = this.postHelpfulReview.bind(this);
    this.postReportReview = this.postReportReview.bind(this);
    this.getReviewID = this.getReviewID.bind(this);
    this.addOutfitItem = this.addOutfitItem.bind(this);
    this.deleteOutfitItem = this.deleteOutfitItem.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.getRelatedProductList = this.getRelatedProductList.bind(this);
  }

  getProducts() {
    $.ajax({
      url: `/info/${this.state.productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        // console.log('Successful get product request!', res);
        this.setState({
          productDesc: res
        });
      },
      error: (err) => {
        // console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.getProductStyles()
        this.getReviews()
        this.getReviewsMetadata()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getProductStyles() {
    $.ajax({
      url: `/styles/${this.state.productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        // console.log('Successful get styles request!');
        this.setState({ productStyle: res });
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
  }

  getReviews() {
    $.ajax({
      url: `/reviews/`,
      method: 'GET',
      contentType: 'application/json',
      data: {
        productID: this.state.productId,
        reviewsSort: this.state.reviewsSort,
        reviewsCount: 100
      },
      success: (res) => {
        // console.log('Successful get request!');
        this.setState({ reviews: res });
      },
      error: (err) => {
        // console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
  }

  postHelpfulReview() {
    $.ajax({
      url: `/reviews/${this.state.reviewID}/helpful`,
      method: 'PUT',
      contentType: 'application/json',
      success: (res) => {
        this.getProducts();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  postReportReview() {
    $.ajax({
      url: `/reviews/${this.state.reviewID}/report`,
      method: 'PUT',
      contentType: 'application/json',
      success: (res) => {
        this.getProducts();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getReviewsMetadata() {
    $.ajax({
      url: `/reviews/meta/`,
      method: 'GET',
      contentType: 'application/json',
      data: {
        productID: this.state.productId,
        reviewsSort: this.state.reviewsSort,
        reviewsCount: 100
      },
      success: (res) => {
        // console.log('Successful get request!');
        this.setState({ reviewsMetadata: res });
      },
      error: (err) => {
        // console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.setState({ averageReviewScore: this.averageReviewScore(this.state.reviewsMetadata.ratings), ready: true });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  setReviewsCount () {
    if (this.state.reviewsCount === 'Not expanded') {
      this.setState({reviewsCount: 'Expanded'}, () => {this.getProducts()});
    } else {
      this.setState({reviewsCount: 'Not expanded'}, () => {this.getProducts()});
    }
  }

  averageReviewScore(scores) {
    // break out all the keys
    let keys = Object.keys(scores);

    if (keys.length > 0) {
      // break out all the values
      let values = Object.values(scores);
      // score total
      let scoreTotal = 0;
      for (let i = 0; i < keys.length; i++) {
        scoreTotal += parseInt(values[i]) * parseInt(keys[i]);
      };
      // response total
      let responseTotal = 0;
      for (let i = 0; i < values.length; i++) {
        responseTotal += parseInt(values[i]);
      };
      return Math.round(scoreTotal / responseTotal);
    } else {
      return 'No reviews';

    }
  }

  setSortOptions () {
    this.setState({reviewsSort: event.target.value}, () => {this.getProducts()});

  }

  getReviewID(id, source) {
    if (source === 'Helpful') {
      this.setState({reviewID: id}, () => {this.postHelpfulReview()});
    } else if (source === 'Report') {
      this.setState({reviewID: id}, () => {this.postReportReview()});
    }
  }

  /************************ for Related Product ************************/
  updateLocalStorage(productObj) {
    // check if product has been added to the outfit list
    for (let key in localStorage) {
      if (parseInt(key) === productObj.productInfo.id) {
        alert('😊 Dear user: This product has been added to your ourfit!');
      }
    }

    // add product to the outfit list
    let id = JSON.stringify(productObj.productInfo.id);
    localStorage.setItem(id, JSON.stringify(productObj));
    let savedProducts = JSON.parse(localStorage.getItem(id));

    this.addOutfitItem();
  }

  addOutfitItem() {
    let local = localStorage;
    let arr = [];
    for (let key in local) {
      if (parseInt(key)) {
        let savedProducts = JSON.parse(localStorage.getItem(key));
        arr.push(savedProducts);
      }
    }
    this.setState({ outfitCollection: arr }, () => {
      // console.log('****set state for outfitCollection INITIAL STATE****: ', this.state.outfitCollection);
    })
  }

  deleteOutfitItem(updatedOutfitCollection, deletedProductID) {
    this.setState({outfitCollection: updatedOutfitCollection}, () => {
      // console.log('****set state for deleteOutfitItem****: ', this.state.outfitCollection);
      localStorage.removeItem(deletedProductID);
    })
  }

  /********* GET related products info and images *********/
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
              let styleURL = `/products/${curProductID}/styles`;

              axios.get(styleURL)
                .then(productStyles => {
                  result.push({
                    productInfo: productInfo.data,
                    productStyles: productStyles.data,
                  })

                  this.setState({ newRelatedProductList: [...result] }, () => {
                    // console.log('****set state for relatedProductSTYLES???? ****: ', this.state.newRelatedProductList);
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

  componentDidMount() {
    this.getProducts();
    this.addOutfitItem();
    this.getRelatedProductList(this.state.productId);
  }

  render() {

    if (this.state.ready) {
      return (
        <div>
          <ProductOverview style={this.state.productStyle}
            desc={this.state.productDesc}
            ratings={this.props.averageReviewScore}/>
          <RelatedProducts
            curProductID={this.state.productId}
            outfitCollection={this.state.outfitCollection}
            style={this.state.productStyle} desc={this.state.productDesc}
            addOutfitItem={this.addOutfitItem}
            deleteOutfitItem={this.deleteOutfitItem}
            productDesc={this.state.productDesc}
            updateProductId={this.updateProductId}
            ratings={this.props.averageReviewScore}
            updateLocalStorage={this.updateLocalStorage}
            newRelatedProductList={this.state.newRelatedProductList}/>
          <QnA curProductID={this.state.productId}
            ratings={this.props.averageReviewScore}/>
          <RnR reviews={this.state.reviews}
            reviewsMetadata={this.state.reviewsMetadata}
            averageReviewScore={this.state.averageReviewScore}
            sortOrder={this.state.reviewsSort}
            setReviewsCount={this.setReviewsCount}
            reviewsCount={this.state.reviewsCount}
            sortOptions={this.state.sortOptions}
            setSortOptions={this.setSortOptions}
            getReviewID={this.getReviewID}
            getProducts={this.getProducts}/>
        </div>
      )
    }

  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);