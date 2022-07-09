// import React from 'react';
// // import { dataAnswer } from './sampleAnswer.js';
// // import { dataQuestion } from './sampleQuestion.js';
// import DisplayQuestion from './DisplayQuestion.jsx'

// const QuestionsList = (props) => (
//   <div>
//     {/* <p> Repo List Component </p> */}
//     There are {props.qna.length} questions.
//     {
//       props.qna.map(
//         (e) => {
//           return <DisplayQuestion key={e.product_id} questions={e.results} />
//         }
//       )
//     }
//     <div className='moreAnswers' on>LOAD MORE ANSWERS</div>
//     <button type='button' id='button1'>MORE ANSWERED QUESTIONS</button>
//     <button type='button' id='button2'>ADD A QUESTION +</button>
//   </div>
// )

// export default QuestionsList;

import React from 'react';
// import { dataAnswer } from './sampleAnswer.js';
// import { dataQuestion } from './sampleQuestion.js';
import DisplayQuestion from './DisplayQuestion.jsx';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      count: 5
    }
  }
  questionLoad() {
    this.props.onLoad(this.state.product_id, this.state.count)
  }

  render() {
    return (
      <div>
        {
          this.props.qna.map(
            (element) => {
              this.setState({
                product_id: element.product_id
              });
              return <DisplayQuestion key={element.product_id} questions={element.results} />
            }
          )
        }
        <button type='button' id='button1' onClick={this.questionLoad.bind(this)}>MORE ANSWERED QUESTIONS</button>
        <button type='button' id='button2'>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default QuestionsList;