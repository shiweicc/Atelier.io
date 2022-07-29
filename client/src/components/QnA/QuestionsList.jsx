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

  markQuestionHelpful = (e, question_id) => {
    e.preventDefault();
    //console.log(question_id);
    //console.log('here', this.props.product_id);
    axios.put('http://localhost:3000/questions/helpful', {
      question_id: question_id
    })
      .then((res) => {
        //console.log(res);
        //console.log(this.props.count, this.props.total);
        const newCount = this.props.count - 2;
        this.props.getQuestions(this.props.product_id, newCount);
      })
      .catch((err) => {
        console.log("client put questions helpful err" + err);
      })
  }

  render() {
    //console.log('current count' + this.props.count);
    //console.log('totol' + props.total);
    var differ = this.props.count - this.props.total;
    return (
      <div >
        {
          this.props.qna.map(
            (element, index) => {
              //console.log(pro_id);
              return <DisplayQuestion key={index} questions={element.results} markQuestionHelpful={this.markQuestionHelpful.bind(this)}
                product_name={this.props.product_name}
              />
            }
          )
        }
        {differ < 3 ?
          < button type='button' className='buttonQuestion' id='button1'
            onClick={() => this.props.loadQuestions(this.props.count)}>MORE ANSWERED QUESTIONS</button>
          : < div></div>
        }
        <button type='button' className='buttonQuestion' id='button2'
          onClick={() => this.setOpenQueModal(true)}>
          ADD A QUESTION +</button>
        {this.state.openQueModal && <ModalQue closeQueModal={this.setOpenQueModal.bind(this)} postQuestion={this.props.getQuestions.bind(this)}
          product_id={this.props.product_id} count={this.props.count} product_name={this.props.product_name} />}
      </div>
    )
  }
}

export default QuestionsList;