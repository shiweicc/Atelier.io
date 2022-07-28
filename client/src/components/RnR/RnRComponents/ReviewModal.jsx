import React from 'react';

const ReviewModal = (props) => {

  if (props.modalRatingValue === '0') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars' onClick={props.setModalRating}></div>
                <div className='one-star' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.modalRatingValue === '5') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} Stars</div>
                <div className='five-stars-full' onClick={props.setModalRating}></div>
                <div className='four-stars-full' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.modalRatingValue === '4') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} Stars</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars-full' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.modalRatingValue === '3') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} Stars</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.modalRatingValue === '2') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} Stars</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.modalRatingValue === '1') {
    return (
      <div>
        <div className='RnRModalContainer'>
          <div className="RnRModal">
            <div className='ModalTitle'>
              Write Your Review
            </div>
            <div className='CloseRnRModal' onClick={props.toggleModal}>
              ❌
            </div>
            <div className='ModalInput'>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} Stars</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form>
                <label className='ModalLabel' for="fname">First name:
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">Last name:
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewModal;