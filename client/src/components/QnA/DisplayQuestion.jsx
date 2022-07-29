import React from 'react';
import DisplayAnswer from './DisplayAnswer.jsx';
import ModalAns from './ModalAns.jsx';
import { useState } from 'react';

class DisplayQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAnsModal: false,
      openId: ''
    };
  }

  setOpenAnsModal(isOpen, id) {
    //console.log("loghere", isOpen);
    //console.log("open", id);

    this.setState({
      openAnsModal: isOpen,
      openId: id
    });
  }

  accessDisplayAnswer = (question_id) => {
    this.refs.DisplayAnswer.getAnswers(question_id, 5);
  };

  render() {
    return (
      < div className='ListWrapper' >
        {
          this.props.questions.map(
            (question, index) => {
             // console.log('quesiont id ' + question.question_id);
              return (
                <div key={index}>
                  <div id="parent-block">
                    <div id='block1'>Q: {question.question_body} </div>
                    <div id='block2'>Helpful? &nbsp;
                      <a href="#" onClick={(e) => this.props.markQuestionHelpful(e, question.question_id)}>Yes</a>
                      ({question.question_helpfulness}) &nbsp; | &nbsp;
                      <a href="#" className="openModalBtn"
                        onClick={() => this.setOpenAnsModal(true, question.question_id)}> Add Answer </a>
                      {this.state.openAnsModal && this.state.openId === question.question_id && <ModalAns key={index}
                        questionId={question.question_id} closeAnsModal={this.setOpenAnsModal.bind(this)}
                        accessDisplayAnswer={this.accessDisplayAnswer.bind(this)} product_name={this.props.product_name}
                        question_body={question.question_body} />}
                    </div>
                  </div>
                  < DisplayAnswer key={index} question_id={question.question_id} ref='DisplayAnswer' />
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