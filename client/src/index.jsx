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
      outfitCollection: [],
      reviewID: 0,
      ready: false
    }
    this.getProducts = this.getProducts.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
    this.averageReviewScore = this.averageReviewScore.bind(this);
    this.updateOutfitCollection = this.updateOutfitCollection.bind(this);
    this.deleteOutfitItem = this.deleteOutfitItem.bind(this);
    this.setReviewsCount = this.setReviewsCount.bind(this);
    this.setSortOptions = this.setSortOptions.bind(this);
    this.postHelpfulReview = this.postHelpfulReview.bind(this);
    this.postReportReview = this.postReportReview.bind(this);
    this.getReviewID = this.getReviewID.bind(this);
  }

  getProducts() {
    $.ajax({
      url: `/info/${this.state.productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        // console.log('Successful get request!');
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
        // console.log('Successful get request!');
        this.setState({ productStyle: res });
      },
      error: (err) => {
        // console.log('Unsuccessful get request.');
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
      this.setState({reviewsCount: 'Expanded'});
      this.getProducts();
    } else {
      this.setState({reviewsCount: 'Not expanded'});
      this.getProducts();
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

  updateOutfitCollection(productObj) {
    let outfitList = this.state.outfitCollection;

    if (outfitList.length === 0) {
      this.setState({outfitCollection: [...this.state.outfitCollection, productObj]}, () => {
        // console.log('****set state for outfitCollection****: ', this.state.outfitCollection);
      })
    } else {
      for (let i = 0; i < outfitList.length; i++) {
        let existedID = outfitList[i].productInfo.id;
        // check if no existed ID in outfitCollection, then add the product info into the collection.
        if (existedID !== productObj.productInfo.id) {
          this.setState({outfitCollection: [...this.state.outfitCollection, productObj]}, () => {
            // console.log('****set state for outfitCollection****: ', this.state.outfitCollection);
          })
        }
      }
    }
  }

  setSortOptions () {
    this.setState({reviewsSort: event.target.value});
    this.getProducts();
  }

  getReviewID(id, source) {
    if (source === 'Helpful') {
      this.setState({reviewID: id});
      this.postHelpfulReview();
    } else if (source === 'Report') {
      this.setState({reviewID: id});
      this.postReportReview();
    }
  }

  deleteOutfitItem(updatedOutfitCollection) {
    this.setState({outfitCollection: updatedOutfitCollection}, () => {
      // console.log('****set state for deleteOutfitItem****: ', this.state.outfitCollection);
    })
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    if (this.state.ready) {
      return (
        <div>
          <ProductOverview style={this.state.productStyle} desc={this.state.productDesc}/>
          <RelatedProducts
            curProductID={this.state.productId}
            outfitCollection={this.state.outfitCollection}
            style={this.state.productStyle} desc={this.state.productDesc}
            updateOutfitCollection={this.updateOutfitCollection}
            deleteOutfitItem={this.deleteOutfitItem}
          />
          <QnA curProductID={this.state.productId}/>
          <RnR reviews={this.state.reviews} reviewsMetadata={this.state.reviewsMetadata} averageReviewScore={this.state.averageReviewScore} sortOrder={this.state.reviewsSort} setReviewsCount={this.setReviewsCount} reviewsCount={this.state.reviewsCount} sortOptions={this.state.sortOptions} setSortOptions={this.setSortOptions} getReviewID={this.getReviewID}/>
        </div>
      )
    }

  }
}
const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);