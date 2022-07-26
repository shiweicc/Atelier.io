import React from 'react';
import DisplayQuestion from './DisplayQuestion.jsx';
import axios from 'axios';
import ModalQue from './ModalQue.jsx';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openQueModal: false
    }
  }

  setOpenQueModal(isOpen) {
    // console.log("loghere", isOpen);
    this.setState({
      openQueModal: isOpen
    });
  }

  markQuestionHelpful = (question_id) => {
    //console.log(question_id);
    //console.log('here', this.props.product_id);
    axios.put('http://localhost:3000/questions/helpful', {
      question_id: question_id
    })
      .then((res) => {
        // console.log(res);
        //console.log(this.props.count, this.props.total);
        this.props.getQuestions(this.props.product_id, this.props.total);
      })
      .catch((err) => {
        console.log("client put questions helpful err" + err);
      })
  }

  render() {
    //console.log('current count' + props.count);
    //console.log('totol' + props.total);
    var differ = this.props.count - this.props.total;
    return (
      <div >
        {
          this.props.qna.map(
            (element) => {
              //console.log(pro_id);
              return <DisplayQuestion key={element.product_id} questions={element.results} markQuestionHelpful={this.markQuestionHelpful.bind(this)} />
            }
          )
        }
        {differ < 3 ?
          < button type='button' className='buttonQuestion' id='button1'
            onClick={() => this.props.getQuestions(this.props.product_id, this.props.count)}>MORE ANSWERED QUESTIONS</button>
          : < div></div>
        }
        <button type='button' className='buttonQuestion' id='button2'
          onClick={() => this.setOpenQueModal(true)}>
          ADD A QUESTION +</button>
        {this.state.openQueModal && <ModalQue closeQueModal={this.setOpenQueModal.bind(this)} postQuestion={this.props.getQuestions.bind(this)}
          product_id={this.props.product_id} count={this.props.count} />}
      </div>
    )
  }
}

export default QuestionsList;