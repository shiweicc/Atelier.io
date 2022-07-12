import React from 'react';
import ReviewList from './RnRComponents/ReviewList.jsx';
import RatingsBreakdown from './RnRComponents/RatingsBreakdown.jsx';
import CharacteristicsBreakdown from './RnRComponents/CharacteristicsBreakdown.jsx';
import Review from './RnRComponents/Review.jsx';

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
            RATINGS &#38; REVIEWS
            <div>
              {this.props.averageReviewScore}
            </div>
          </div>
          <div class='RnRRatings'>
            {this.state.ratingsPercent}&#37; of reviewers recommend this product
            <RatingsBreakdown ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} />
          </div>
          <div class='RnRCharacteristics'>
            <CharacteristicsBreakdown characteristics={this.props.reviewsMetadata.characteristics} />
          </div>
          <div class='RnRReviewList'>
            <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.state.sortOrder} />
          </div>
        </div>
      </div>
    )

  }
}

export default RnR;