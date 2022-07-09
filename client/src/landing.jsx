import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import App from './index.jsx';

class Landing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Routes path="/"> */}
            <App />
          {/* </Routes> */}
        </div>
      </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<Landing />);