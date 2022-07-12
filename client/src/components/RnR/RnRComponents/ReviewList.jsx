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
        <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder}/>
        <div>
          {this.props.reviews.results.map((review) => {
            return <Review reviews={review}/>
          })}
        </div>
      </div>

    )
  }
}

export default ReviewList;