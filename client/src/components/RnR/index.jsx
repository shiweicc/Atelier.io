import React from 'react';
import ReviewList from './RnRComponents/ReviewList.jsx';
import RatingsList from './RnRComponents/RatingsList.jsx';
import CharacteristicsList from './RnRComponents/CharacteristicsList.jsx';
import Review from './RnRComponents/Review.jsx';
import Stars from './RnRComponents/Stars.jsx';
import Sort from './RnRComponents/Sort.jsx';
import ReviewModal from './RnRComponents/ReviewModal.jsx';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratingsPercent: 0,
      starsFilter: [],
      modalOpen: false,
      modalRating: false,
      modalRatingValue: '0',
      recommended: 'unchecked'
    }

    this.percentRatings = this.percentRatings.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.setStarsFilter = this.setStarsFilter.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.removeAllFilters = this.removeAllFilters.bind(this);
    this.setModalRating = this.setModalRating.bind(this);
    this.setRecommended = this.setRecommended.bind(this);
  }

  percentRatings() {
    let total = parseInt(this.props.reviewsMetadata.recommended.false) + parseInt(this.props.reviewsMetadata.recommended.true);
    let percent = parseInt(this.props.reviewsMetadata.recommended.true) / total;
    percent = Math.floor(percent * 100);
    this.setState({ ratingsPercent: percent });
  }

  handleMoreReviews() {
    this.props.setReviewsCount();
  }

  removeAllFilters () {
    this.setState({starsFilter: []});
  }

  setRecommended (e) {
    this.setState({recommended: e.target.value})
  }

  setModalRating (e) {
    if (e.target.className === 'five-stars' || e.target.className === 'five-stars-full') {
      if (this.state.modalRating === false) {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '5'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue === '5') {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '0'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue !== '5') {
        this.setState({modalRatingValue: '5'});
      }
    } else if (e.target.className === 'four-stars' || e.target.className === 'four-stars-full') {
      if (this.state.modalRating === false) {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '4'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue === '4') {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '0'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue !== '4') {
        this.setState({modalRatingValue: '4'});
      }
    } else if (e.target.className === 'three-stars' || e.target.className === 'three-stars-full') {
      if (this.state.modalRating === false) {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '3'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue === '3') {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '0'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue !== '3') {
        this.setState({modalRatingValue: '3'});
      }
    } else if (e.target.className === 'two-stars' || e.target.className === 'two-stars-full') {
      if (this.state.modalRating === false) {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '2'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue === '2') {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '0'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue !== '2') {
        this.setState({modalRatingValue: '2'});
      }
    } else if (e.target.className === 'one-star' || e.target.className === 'one-star-full') {
      if (this.state.modalRating === false) {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '1'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue === '1') {
        this.setState({modalRating: !this.state.modalRating, modalRatingValue: '0'});
      } else if (this.state.modalRating === true && this.state.modalRatingValue !== '1') {
        this.setState({modalRatingValue: '1'});
      }
    }
  }

  setStarsFilter() {
    if (!this.state.starsFilter.includes(event.target.innerText[0])) {
      this.setState({ starsFilter: [...this.state.starsFilter, event.target.innerText[0]] }, () => { console.log(this.state.starsFilter) });
    } else {
      let newState = this.state.starsFilter.filter((element) => {
        return element !== event.target.innerText[0];
      });
      this.setState({ starsFilter: newState }, () => { console.log(this.state.starsFilter) });
    }
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen, recommended: 'unchecked', modalRating: false, modalRatingValue: '0'});
  }

  componentDidMount() {
    this.percentRatings();
  }

  render() {
    if (this.state.modalOpen === true) {
      if (this.props.reviewsCount === 'Not expanded') {
        return (
          <div>
            <ReviewModal toggleModal={this.toggleModal} setModalRating={this.setModalRating} modalRating={this.state.modalRating} modalRatingValue={this.state.modalRatingValue} setRecommended={this.setRecommended}/>
            <div className='RnR'>
              <div className='RnRHead'>
                <div>
                  <h1 className="rating">RATINGS &#38; REVIEWS</h1>
                </div>
                <div className='rating'>
                  {this.props.averageReviewScore}
                </div>
                <div className='rating'>
                  <Stars ratings={this.props.averageReviewScore} />
                </div>
              </div>
              <div className='RnRRatings'>
                <div>
                  <span className='percent'>{this.state.ratingsPercent}&#37;</span> of reviewers recommend this product
                </div>
                <RatingsList ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} removeAllFilters={this.removeAllFilters}/>
              </div>
              <div className='RnRCharacteristics'>
                <CharacteristicsList characteristics={this.props.reviewsMetadata.characteristics} />
              </div>
              <div className='RnRReviewHead'>
                <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} />
              </div>
              <div className='RnRSortHead'>
                <div className='RnRHeadReviews'>
                  <span>sorted by </span>
                  <div className='sort'>
                    <select onChange={this.props.setSortOptions}>
                      {this.props.sortOptions.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='RnRReviewList'>
                <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} ratings={this.props.averageReviewScore} reviewsCount={this.props.reviewsCount} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} getReviewID={this.props.getReviewID} />
              </div>
              <div className='RnRAddReview'>
                <button className='RnRReviewListButton1' onClick={this.handleMoreReviews}>More Reviews</button>
                <button className='RnRReviewListButton2' onClick={this.toggleModal}>Add Review</button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <ReviewModal toggleModal={this.toggleModal} setModalRating={this.setModalRating} modalRating={this.state.modalRating} modalRatingValue={this.state.modalRatingValue} setRecommended={this.setRecommended}/>
            <div className='RnR'>
              <div className='RnRHead'>
                <div>
                  <h1 className="rating">RATINGS &#38; REVIEWS</h1>
                </div>
                <div className='rating'>
                  {this.props.averageReviewScore}
                </div>
                <div className='rating'>
                  <Stars ratings={this.props.averageReviewScore} />
                </div>
              </div>
              <div className='RnRRatings'>
                <div className='percent'>
                  <span className='percent'>{this.state.ratingsPercent}&#37;</span> of reviewers recommend this product
                </div>
                <RatingsList ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} removeAllFilters={this.removeAllFilters}/>
              </div>
              <div className='RnRCharacteristics'>
                <CharacteristicsList characteristics={this.props.reviewsMetadata.characteristics} />
              </div>
              <div className='RnRReviewHead'>
                <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} />
              </div>
              <div className='RnRSortHead'>
                <div className='RnRHeadReviews'>
                  <span>sorted by </span>
                  <div className='sort'>
                    <select onChange={this.props.setSortOptions}>
                      {this.props.sortOptions.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='RnRReviewList'>
                <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} ratings={this.props.averageReviewScore} reviewsCount={this.props.reviewsCount} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} getReviewID={this.props.getReviewID} />
              </div>
              <div className='RnRAddReview'>
                <button className='RnRReviewListButton1' onClick={this.handleMoreReviews}>Less Reviews</button>
                <button className='RnRReviewListButton2' onClick={this.toggleModal}>Add Review</button>
              </div>
            </div>
          </div>
        )
      }
    } else {
      if (this.props.reviewsCount === 'Not expanded') {
        return (
          <div>
            <div className='RnR'>
              <div className='RnRHead'>
                <div>
                  <h1 className="rating">RATINGS &#38; REVIEWS</h1>
                </div>
                <div className='rating'>
                  {this.props.averageReviewScore}
                </div>
                <div className='rating'>
                  <Stars ratings={this.props.averageReviewScore} />
                </div>
              </div>
              <div className='RnRRatings'>
                <div>
                  <span className='percent'>{this.state.ratingsPercent}&#37;</span> of reviewers recommend this product
                </div>
                <RatingsList ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} removeAllFilters={this.removeAllFilters}/>
              </div>
              <div className='RnRCharacteristics'>
                <CharacteristicsList characteristics={this.props.reviewsMetadata.characteristics} />
              </div>
              <div className='RnRReviewHead'>
                <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} />
              </div>
              <div className='RnRSortHead'>
                <div className='RnRHeadReviews'>
                  <span>sorted by </span>
                  <div className='sort'>
                    <select onChange={this.props.setSortOptions}>
                      {this.props.sortOptions.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='RnRReviewList'>
                <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} ratings={this.props.averageReviewScore} reviewsCount={this.props.reviewsCount} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} getReviewID={this.props.getReviewID} />
              </div>
              <div className='RnRAddReview'>
                <button className='RnRReviewListButton1' onClick={this.handleMoreReviews}>More Reviews</button>
                <button className='RnRReviewListButton2' onClick={this.toggleModal}>Add Review</button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div className='RnR'>
              <div className='RnRHead'>
                <div>
                  <h1 className="rating">RATINGS &#38; REVIEWS</h1>
                </div>
                <div className='rating'>
                  {this.props.averageReviewScore}
                </div>
                <div className='rating'>
                  <Stars ratings={this.props.averageReviewScore} />
                </div>
              </div>
              <div className='RnRRatings'>
                <div className='percent'>
                  <span className='percent'>{this.state.ratingsPercent}&#37;</span> of reviewers recommend this product
                </div>
                <RatingsList ratings={this.props.reviewsMetadata.ratings} recommended={this.props.reviewsMetadata.recommended} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} removeAllFilters={this.removeAllFilters}/>
              </div>
              <div className='RnRCharacteristics'>
                <CharacteristicsList characteristics={this.props.reviewsMetadata.characteristics} />
              </div>
              <div className='RnRReviewHead'>
                <Sort reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} />
              </div>
              <div className='RnRSortHead'>
                <div className='RnRHeadReviews'>
                  <span>sorted by </span>
                  <div className='sort'>
                    <select onChange={this.props.setSortOptions}>
                      {this.props.sortOptions.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='RnRReviewList'>
                <ReviewList reviews={this.props.reviews} reviewsMetadata={this.props.reviewsMetadata} sortOrder={this.props.sortOrder} ratings={this.props.averageReviewScore} reviewsCount={this.props.reviewsCount} starsFilter={this.state.starsFilter} setStarsFilter={this.setStarsFilter} getReviewID={this.props.getReviewID} />
              </div>
              <div className='RnRAddReview'>
                <button className='RnRReviewListButton1' onClick={this.handleMoreReviews}>Less Reviews</button>
                <button className='RnRReviewListButton2' onClick={this.toggleModal}>Add Review</button>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

export default RnR;