
import React from 'react'


const Answer = (props) => {
  var d = new Date(props.ans.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', options).format(d);
  //console.log(props.ans.answer_id);
  return (
    <div className='answers'>
      <div id='answer1' > <b>A:</b> {props.ans.body}</div>
      <div id='answer2'>by {props.ans.answerer_name === 'Seller' ? <b>{props.ans.answerer_name}</b> : props.ans.answerer_name}, {date} &nbsp; |  &nbsp; Helpful? &nbsp;
        <a href="#" onClick={() => props.markAnswerHelpful(props.ans.answer_id)}> Yes</a>
        ({props.ans.helpfulness}) &nbsp; | &nbsp;
        <a href='' onClink=''>Report</a></div>
    </div>
  )
}

export default Answer;