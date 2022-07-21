import React from 'react';
// import { dataAnswer } from './sampleAnswer.js';
// import { dataQuestion } from './sampleQuestion.js';
import DisplayQuestion from './DisplayQuestion.jsx';


const QuestionsList = (props) => {

  var pro_id = '';
  //console.log('current count' + props.count);
  //console.log('totol' + props.total);
  var differ = props.count - props.total;
    return (
      <div >
        {
          props.qna.map(
            (element) => {
              pro_id = element.product_id;
              return <DisplayQuestion key={element.product_id} questions={element.results} />
            }
          )
        }
        {differ < 3 ?
          < button type='button' className='buttonQuestion' id='button1'
            onClick={() => props.getQuestions(pro_id, props.count)}>MORE ANSWERED QUESTIONS</button>
          : < div></div>
        }
        <button type='button' className='buttonQuestion' id='button2'>ADD A QUESTION +</button>
      </div>
    )

}

export default QuestionsList;