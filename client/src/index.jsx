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
      curProductID: 71702,
    }
  }

  getProduct () {
    $.ajax({
      url: `/products/${this.state.productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        console.log('result', res)
        this.setState({
          productDesc: res.product,
          productStyle: res.styles
        });
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


  render() {
    return (
      <div>
      {/* <ProductOverview /> */}
      <RelatedProducts
        curProductID={this.state.curProductID}
      />
      {/* <QnA /> */}
      {/* <RnR /> */}
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);


