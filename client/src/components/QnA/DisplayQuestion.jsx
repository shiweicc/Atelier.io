import React from 'react';
import DisplayAnswer from './DisplayAnswer.jsx'

const DisplayQuestion = (props) => {

  // accessDisplayAnswer = () => {
  //   this.refs.DisplayAnswer.getAnswers(this.state.question_id, 5);
  // };


    return (
      < div >
        {
          props.questions.map(
            (question) => {
              return (
                <div>
                  <div id="parent-block">
                    <div id='block1'>Q: {question.question_body} </div>
                    <div id='block2'>Helpful? &nbsp;<a href='' onClink=''>Yes  </a>({question.question_helpfulness}) &nbsp; | &nbsp; <a href='' onClink=''> Add Answer </a></div>
                  </div>
                  <DisplayAnswer key={question.question_id} question_id={question.question_id} />
                </div>
              )
            }
          )
        }


        {/* <button id='buttonAnswer' type='button' onClick={this.accessDisplayAnswer.bind(this)}>COLLAPSE ANSWERS</button> */}
        {/* ref='DisplayAnswer' */}
      </div >
    );
  }


export default DisplayQuestion;