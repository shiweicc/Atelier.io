import React from 'react';
import DisplayAnswer from './DisplayAnswer.jsx';
import ModalAns from './ModalAns.jsx';
import { useState } from 'react';

class DisplayQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAnsModal: false
    };
  }

  setOpenAnsModal(isOpen) {
    //console.log("loghere", isOpen);
    this.setState({
      openAnsModal: isOpen
    });
  }

  accessDisplayAnswer = (question_id) => {
    this.refs.DisplayAnswer.getAnswers(question_id, 5);
  };

  render() {
  return (
    < div >
      {
        this.props.questions.map(
          (question) => {
            //console.log(question.question_id);
            return (
              <div>
                <div id="parent-block">
                  <div id='block1'>Q: {question.question_body} </div>
                  <div id='block2'>Helpful? &nbsp;
                    <a href="#" onClick={() => this.props.markQuestionHelpful(question.question_id)}>Yes</a>
                    ({question.question_helpfulness}) &nbsp; | &nbsp;
                    <a href="#" className="openModalBtn"
                      onClick={() => this.setOpenAnsModal(true)}> Add Answer </a>
                    {this.state.openAnsModal && <ModalAns questionId={question.question_id} closeAnsModal={this.setOpenAnsModal.bind(this)}
                      accessDisplayAnswer={this.accessDisplayAnswer.bind(this)} />}
                  </div>
                </div>
                <DisplayAnswer key={question.question_id} question_id={question.question_id} ref='DisplayAnswer' />
              </div>
            )
          }
        )
      }

    </div >
  );
  }
}


export default DisplayQuestion;