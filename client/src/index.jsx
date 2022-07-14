import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProducts from './components/RelatedProducts/index.jsx';
import QnA from './components/QnA/index.jsx';
import RnR from './components/RnR/index.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // curProductID: 71701
      curProductID: window.location.href.split('/').slice(-2, -1)[0]
    }
  }



  render() {
    return (

    <div>
        React is working!
        <ProductOverview />
        {/* <RelatedProducts /> */}
        <QnA curProductID={this.state.curProductID} />
        {/* <RnR /> */}
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);