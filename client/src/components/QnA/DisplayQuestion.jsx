

import React from 'react';
import DisplayAnswer from './DisplayAnswer.jsx'

class DisplayQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      question_id: ''
    }
  }
  accessDisplayAnswer = () => {
    this.refs.DisplayAnswer.getAnswers(this.state.question_id, this.state.count);
  };

  render() {
    return (
      < div className="questionList" >
        {
          this.props.questions.map(
            (question) => {
              this.setState({
                question_id: question.question_id
              });
              return (
                <div>
                  <div className="question" id='block1'>Q: {question.question_body} </div>
                  <div id='block2'>Helpful?  <a href='' onClink=''>Yes</a>({question.question_helpfulness}) | <a href='' onClink=''>Add Answer</a></div>
                  <DisplayAnswer key={question.question_id} answers={question.question_id} ref='DisplayAnswer' />

                </div>
              )
            }
          )
        }
        <button type='button' onClick={this.accessDisplayAnswer.bind(this)}>LOAD MORE ANSWERS</button>
      </div >
    );
  }
}

export default DisplayQuestion;