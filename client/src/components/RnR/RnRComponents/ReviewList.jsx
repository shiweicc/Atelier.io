import React from 'react';
import Review from './Review.jsx';
import Sort from './Sort.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  render() {
    return (
      <div>
        <Sort />
        <div>
          This is the review list!
          <Review />
          <Review />
        </div>
      </div>

    )
  }
}

export default ReviewList;