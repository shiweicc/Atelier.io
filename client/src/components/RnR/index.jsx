import React from 'react';
import ReviewList from './RnRComponents/ReviewList.jsx';
import RatingsBreakdown from './RnRComponents/RatingsBreakdown.jsx';
import CharacteristicsBreakdown from './RnRComponents/CharacteristicsBreakdown.jsx';
import Review from './RnRComponents/Review.jsx';

class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "recommended"
    }
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
            <RatingsBreakdown ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} />
          </div>
          <div class='RnRCharacteristics'>
            <CharacteristicsBreakdown characteristics={this.props.reviewsMetadata.characteristics} />
          </div>
          <div class='RnRReviewList'>
            <ReviewList results={this.props.reviews} sortOrder={this.state.sortOrder} />
          </div>
        </div>
      </div>
    )

  }
}

export default RnR;