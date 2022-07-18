import React from 'react';
import Review from './Review.jsx';
import Sort from './Sort.jsx';

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
        {this.props.reviews.results.map((review) => {
          return <Review reviews={review} />
        })}
      </div>
    )
  }
}

export default ReviewList;