
import React from 'react'


const Answer = (props) => {
  var d = new Date(props.ans.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', options).format(d);
  return (
    <div>
      <div > A: {props.ans.body}</div>
      <div>by {props.ans.answerer_name === 'Seller' ? <b>{props.ans.answerer_name}</b> : props.ans.answerer_name}, {date} | Helpful? <a href='' onClink=''>Yes</a>({props.ans.helpfulness}) | <a href='' onClink=''>Report</a></div>
    </div>
  )
}

export default Answer;