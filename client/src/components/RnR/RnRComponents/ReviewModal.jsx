import React from 'react';

const ReviewModal = (props) => {

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
              <div className='five-stars'></div>
              <div className='four-stars'></div>
              <div className='three-stars'></div>
              <div className='two-stars'></div>
              <div className='one-star'></div>
            </div>
            <form>
              <label for="fname">First name:
                <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
              </label>
              <br></br>
              <label for="lname">Last name:
                <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewModal;