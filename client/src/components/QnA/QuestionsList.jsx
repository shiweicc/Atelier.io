import React from 'react';
import DisplayQuestion from './DisplayQuestion.jsx';
import axios from 'axios';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ans: [],
      // answerCount: 2,
      // totalAnsCount: 0
    }
  }

  markQuestionHelpful = (question_id) => {
    //console.log(question_id);
    //console.log('here', this.props.product_id);
    axios.put('http://localhost:3000/questions/helpful', {
      question_id: question_id
    })
      .then((res) => {
        console.log(res);
        this.props.getQuestions(this.props.product_id, this.props.count);
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
        <button type='button' className='buttonQuestion' id='button2'>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default QuestionsList;