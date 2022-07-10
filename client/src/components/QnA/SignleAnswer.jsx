
import React from 'react';
import Answer from './Answer.jsx'



const SignleAnswer = (props) => (
  <div>
    {
      props.ans.map(
        (answer) => {
          return <Answer key={answer.answer_id} ans={answer} />
        }
      )
    }
  </div >
)

export default SignleAnswer;