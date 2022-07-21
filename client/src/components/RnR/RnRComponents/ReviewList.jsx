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
    if (this.props.starsFilter === 0) {
      if (this.props.reviewsCount === 'Not expanded') {
        return (
          <div>
            {this.props.reviews.results.slice(0, 2).map((review, i) => {
              return <Review key={i} reviews={review} getReviewID={this.props.getReviewID}/>
            })}
          </div>
        )
      } else {
        return (
          <div>
            {this.props.reviews.results.map((review, i) => {
              return <Review key={i} reviews={review} getReviewID={this.props.getReviewID}/>
            })}
          </div>
        )
      }
    } else {
      let results = this.props.reviews.results.filter((element) => {
        return parseInt(element.rating) === parseInt(this.props.starsFilter);
      })
      if (this.props.reviewsCount === 'Not expanded') {
        return (
          <div>
            {results.slice(0, 2).map((review, i) => {
              return <Review key={i} reviews={review} getReviewID={this.props.getReviewID}/>
            })}
          </div>
        )
      } else {
        return (
          <div>
            {results.map((review, i) => {
              return <Review key={i} reviews={review} getReviewID={this.props.getReviewID}/>
            })}
          </div>
        )
      }
    }
  }
}

export default ReviewList;