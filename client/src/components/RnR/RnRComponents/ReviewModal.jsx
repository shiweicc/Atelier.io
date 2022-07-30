import React from 'react';
import ModalCharacteristic from './ModalCharacteristic.jsx';

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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars' onClick={props.setModalRating}></div>
                <div className='one-star' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} - Great</div>
                <div className='five-stars-full' onClick={props.setModalRating}></div>
                <div className='four-stars-full' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} - Good</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars-full' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} - Average</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars-full' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} - Fair</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars-full' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
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
              <div className='star-title'>How would you rate this item?</div>
              <div className='star-wrapper'>
                <div className='ModalRating'>{props.modalRatingValue} - Poor</div>
                <div className='five-stars' onClick={props.setModalRating}></div>
                <div className='four-stars' onClick={props.setModalRating}></div>
                <div className='three-stars' onClick={props.setModalRating}></div>
                <div className='two-stars' onClick={props.setModalRating}></div>
                <div className='one-star-full' onClick={props.setModalRating}></div>
              </div>
              <form className='ModalNamesForm'>
                <label className='ModalLabel' for="fname">What is your first name?
                  <input type="text" className="ModalInputFieldSmall" name="fname" size='30' maxlength='30' />
                </label>
                <label className='ModalLabel' for="lname">What is your last name?
                  <input type="text" className="ModalInputFieldSmall" name="lname" size='30' maxlength='30' />
                </label>
              </form>
              <form className='ModalRecommended'>
                <label className='ModalLabel' for='recommended'>Do you recommend this product?
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='Yes' onClick={props.setRecommended}/>Yes
                  <input className='ModalRecommendedInput' type='radio' name='recommended' value='No' onClick={props.setRecommended}/>No
                </label>
              </form>
              <div className='ModalNickname'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="nname">What is your nickname?
                    <input type="text" className="ModalInputFieldSmall" name="nname" size='30' maxlength='60' placeholder='Example: Jackson11!'/>
                  </label>
                </form>
                <span className='SmallText'>For privacy reasons, do not use your full name or email address.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <div className='ModalEmail'>
                <form className='ModalNamesForm'>
                  <label className='ModalLabel' for="email">What is your email?
                    <input type="text" className="ModalInputFieldSmall" name="email" size='30' maxlength='60' placeholder='Example: Jackson11@email.com'/>
                  </label>
                </form>
                <span className='SmallText'>For authentication reasons, you will not be emailed.</span>
              </div>
              <form className='ModalCharacteristics'>
                {Object.keys(props.meta.characteristics).map((characteristic) => {
                  return <div key={characteristic}>
                    <ModalCharacteristic characteristics={props.characteristics} characteristic={characteristic}/>
                    <label className='ModalLabelCharacteristic' for={characteristic}>{characteristic}
                      <div className='ModalCharacteristicDiv'>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                        <input className='ModalCharacteristicsInput' type='radio' name={characteristic}/>
                      </div>
                    </label>
                  </div>
                })}
              </form>
              <div className='ModalUploadContainer'>
                <div className='ModalImageTitle'>Upload Image:</div>
                <div className='ModalImagePlaceholder'></div>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" className='ModalFileUpload'/>
                  <input type="submit" className='ModalFileSubmit'/>
                </form>
              </div>
              <div className='ModalReviewSummary'>
                <form>
                  <label className='ModalLabel' for="summary">Review Summary:
                    <input type="text" className="ModalInputFieldMedium" name="summary" size='30' maxlength='60'/>
                  </label>
                </form>
              </div>
              <div className='ModalBody'>
                <form>
                  <label className='ModalLabel' for="body">Review Body:
                    <textarea className="ModalInputFieldLarge" name='body' maxlength='1000'/>
                  </label>
                </form>
              </div>
              <div className='SubmitRnRModal'>
                <form className='RnRSubmit'>
                  <input type="submit" className='ModalFileSubmit2' onClick={props.toggleModal}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewModal;