import React from 'react';
import DisplayAnswer from './DisplayAnswer.jsx';


const DisplayQuestion = (props) => {

  return (
    < div >
      {
        props.questions.map(
          (question) => {
            console.log(question.question_id);
            return (
              <div>
                <div id="parent-block">
                  <div id='block1'>Q: {question.question_body} </div>
                  <div id='block2'>Helpful? &nbsp;
                    <a href="#" onClick={() => props.markQuestionHelpful(question.question_id)}>Yes</a>
                    ({question.question_helpfulness}) &nbsp; | &nbsp;
                    <a href='' onClink=''> Add Answer </a>
                  </div>
                </div>
                <DisplayAnswer key={question.question_id} question_id={question.question_id} />
              </div>
            )
          }
        )
      }
    </div >
  );
}


export default DisplayQuestion;