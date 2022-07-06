import React from 'react';
import { dataAnswer } from './sampleAnswer.js';
import { dataQuestion } from './sampleQuestion.js';
import DisplayQuestion from './DisplayQuestion.jsx'

const QuestionsList = () => (
  <div>
    {/* <p> Repo List Component </p> */}
    {
      dataQuestion.map(
        (e) => {
          return <DisplayQuestion key={e.product_id} questions={e.results} />
        }
      )
    }
    <div className='moreAnswers'>LOAD MORE ANSWERS</div>
    <button type='button' id='button1'>MORE ANSWERED QUESTIONS</button>
    <button type='button' id='button2'>ADD A QUESTION +</button>
  </div>
)

export default QuestionsList;