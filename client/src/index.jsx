import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProducts from './components/RelatedProducts/index.jsx';
import QnA from './components/QnA/index.jsx';
import RnR from './components/RnR/index.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: [],
      productInfo: [],
      productStyles: [],
      reviews: [],
      reviewsMetadata: []
    }
    this.getProduct = this.getProduct.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
  }

  getProduct () {
    $.ajax({
      url: '/products',
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        this.setState({products: res, currentProduct: res[0]});
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.getProductInfo();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getProductInfo () {
    $.ajax({
      url: `/info/${this.state.currentProduct.id}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        this.setState({productInfo: res});
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.getProductStyles();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getProductStyles () {
    $.ajax({
      url: `/styles/${this.state.currentProduct.id}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        this.setState({productStyles: res});
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.getReviews();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getReviews () {
    $.ajax({
      url: `/reviews/`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        this.setState({reviews: res});
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
      .then((data) => {
        this.getReviewsMetadata();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getReviewsMetadata () {
    $.ajax({
      url: `/reviews/meta/`,
      method: 'GET',
      contentType: 'application/json',
      data: {
        productID: this.state.currentProduct.id
      },
      success: (res) => {
        console.log('Successful get request!');
        this.setState({reviewsMetadata: res});
      },
      error: (err) => {
        console.log('Unsuccessful get request.');
        console.log(err);
      }
    })
  }

  componentDidMount () {
    this.getProduct();
  }

  componentDidUpdate() {
    // this.getProductInfo();
    // this.getProductStyles();
    // this.getReviews();
    // this.getReviewsMetadata();
  }

  render() {
    return (
    <div>
      React is working!
      <ProductOverview />
      <RelatedProducts />
      <QnA />
      <RnR />
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);