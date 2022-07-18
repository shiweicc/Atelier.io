import React from 'react';
import ReviewList from './RnRComponents/ReviewList.jsx';
import RatingsList from './RnRComponents/RatingsList.jsx';
import CharacteristicsList from './RnRComponents/CharacteristicsList.jsx';
import Review from './RnRComponents/Review.jsx';
import Stars from './RnRComponents/Stars.jsx';
import Sort from './RnRComponents/Sort.jsx';

class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "relevance",
      ratingsPercent: 0
    }
    this.percentRatings = this.percentRatings.bind(this);
  }

  percentRatings () {
    let total = parseInt(this.props.reviewsMetadata.recommended.false) + parseInt(this.props.reviewsMetadata.recommended.true);
    let percent = parseInt(this.props.reviewsMetadata.recommended.true) / total;
    percent = Math.floor(percent * 100);
    this.setState({ratingsPercent: percent});
  }

  componentDidMount () {
    this.percentRatings();
  }

  render() {
    return (
      <div>
        <p>__________________________________</p>
        <div class='RnR'>
          <div class='RnRHead'>
            <div>
              <h1 class="rating">RATINGS &#38; REVIEWS</h1>
            </div>
            <div class='rating'>
              {this.props.averageReviewScore}
            </div>
            <div class='rating'>
              <Stars ratings={this.props.averageReviewScore}/>
            </div>
          </div>
          <div class='RnRRatings'>
            <div class='percent'>
              <span class='percent'>{this.state.ratingsPercent}&#37;</span> of reviewers recommend this product
            </div>
            <RatingsList ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} />
          </div>
          <div class='RnRCharacteristics'>
            <CharacteristicsList characteristics={this.props.reviewsMetadata.characteristics} />
          </div>
          <div class='RnRReviewList'>
            <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.state.sortOrder} />
            <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.state.sortOrder} />
          </div>
        </div>
      </div>
    )

  }
}

export default RnR;