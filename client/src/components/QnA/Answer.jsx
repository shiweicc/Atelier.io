
import React from 'react';
import Photos from './Photos.jsx';

const Answer = (props) => {
  var d = new Date(props.ans.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', options).format(d);
  console.log(props.ans.answer_id);
  // const photos = props.ans.photos;
  // console.log(photos);

  return (
    <div className='answers'>

      <div id='answer1' > <b>A:</b> {props.ans.body}</div>
      {/* <img id='picture' src='https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg'></img> */}
      <Photos photo={props.ans.photos} />
      <div id='answer2'>by {props.ans.answerer_name === 'Seller' ? <b>{props.ans.answerer_name}</b> : props.ans.answerer_name}, {date} &nbsp; |  &nbsp; Helpful? &nbsp;
        <a href="#" onClick={(e) => props.markAnswerHelpful(e, props.ans.answer_id)}> Yes</a>
        ({props.ans.helpfulness}) &nbsp; | &nbsp;
        <a href="#" onClick={(e) => props.report(e, props.ans.answer_id)}> Report</a></div>

    </div>
  )
}

export default Answer;