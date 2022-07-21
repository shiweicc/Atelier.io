
import React from 'react';
import Answer from './Answer.jsx'



const SignleAnswer = (props) => {
  // var isLoaded = props.loadedAnswer
  //console.log('total answer ' + props.total);
  const totalAns = props.total;
  return (
    <div>
      {
        props.ans.map(
          (answer) => {
            return <Answer key={answer.answer_id} ans={answer} />
          }
        )
      }
      {totalAns < 3 ?
        < button id='buttonAnswer' type='button' onClick={() => { props.getAnswers(props.que_id, 5) }}> LOAD MORE ANSWERS</button >
        : < button id='buttonAnswer' type='button' onClick={() => { props.getAnswers(props.que_id, 2) }}> COLLAPSE ANSWERS</button >
      }
    </div >
  )
}

export default SignleAnswer;