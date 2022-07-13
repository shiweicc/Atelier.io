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
      averageReviewScore: 0,
      outfitCollection: [],
      ready: false,
    }
    this.getProducts = this.getProducts.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
    this.averageReviewScore = this.averageReviewScore.bind(this);
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
        productID: this.state.productId
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

  getReviewsMetadata() {
    $.ajax({
      url: `/reviews/meta/`,
      method: 'GET',
      contentType: 'application/json',
      data: {
        productID: this.state.productId
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

  componentDidMount() {
    this.getProducts();
  }


  render() {
    if (this.state.ready) {
      return (
        <div>
          {/* <ProductOverview style={this.state.productStyle} desc={this.state.productDesc}/>
          <RelatedProducts curProductID={this.state.productId}/>
          <QnA curProductID={this.state.productId}/> */}
          <RnR reviews={this.state.reviews} reviewsMetadata={this.state.reviewsMetadata} averageReviewScore={this.state.averageReviewScore} />
        </div>
      )
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);