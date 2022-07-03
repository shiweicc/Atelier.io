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
    }
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct () {
    $.ajax({
      url: '/products',
      method: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log('Successful get request!');
        console.log(res);
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