import React from 'react';
import Review from './Review.jsx';
import Sort from './Sort.jsx';
import Stars from './Stars.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    if (this.props.reviewsCount === 'Not expanded') {
      return (
        <div>
          {this.props.reviews.results.slice(0, 2).map((review) => {
            return <Review reviews={review}/>
          })}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.reviews.results.map((review) => {
            return <Review reviews={review}/>
          })}
        </div>
      )
    }
  }
}

export default ReviewList;