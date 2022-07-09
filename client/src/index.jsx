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
      productDesc: {},
      productStyle: {},
      productId: window.location.href.split('/').slice(-2, -1)[0],
      curProductID: 71697,
      outfitCollection: [],
    }
    this.getProduct = this.getProduct.bind(this);
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
      <ProductOverview style={this.state.productStyle} desc={this.state.productDesc}/>
      {/* <RelatedProducts curProductID={this.state.curProductID}/> */}
      {/* <QnA />
      <RnR /> */}
    </div>
    )
  }
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('App'));
// root.render(<App />);