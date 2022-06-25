import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div>
      is this working
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />);