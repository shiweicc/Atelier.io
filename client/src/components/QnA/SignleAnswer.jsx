
import React from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';



class SignleAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  markAnswerHelpful = (answer_id) => {
    //console.log('here');
    axios.put('http://localhost:3000/answers/helpful', {
      answer_id: answer_id
    })
      .then((res) => {
        //console.log(this.props.total);
        this.props.total < 3 ?
          this.props.getAnswers(this.props.que_id, 2) : this.props.getAnswers(this.props.que_id, 5);

      })
      .catch((err) => {
        console.log("client put answers helpful err" + err);
      })
  }

  report = (answer_id) => {
    //console.log("here", answer_id);
    axios.put('http://localhost:3000/answers/report', {
      answer_id: answer_id
    })
      .then((res) => {
        //console.log(res.data);
        this.props.getAnswers(this.props.que_id, 2);
      })
      .catch((err) => {
        console.log("client put answers report err" + err);
      })
  }

  //console.log('total answer ' + props.total);
  render() {
    const totalAns = this.props.total;
  return (
    <div>
      {
        this.props.ans.map(
          (answer) => {
            return <Answer key={answer.answer_id} ans={answer} markAnswerHelpful={this.markAnswerHelpful.bind(this)}
              report={this.report.bind(this)} />
          }
        )
      }
      {totalAns < 3 ?
        < button id='buttonAnswer' type='button' onClick={() => { this.props.getAnswers(this.props.que_id, 5) }}> LOAD MORE ANSWERS</button >
        : < button id='buttonAnswer' type='button' onClick={() => { this.props.getAnswers(this.props.que_id, 2) }}> COLLAPSE ANSWERS</button >
      }
    </div >
  )
}
}

export default SignleAnswer;