import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';
import "./style.css";


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qna: [],
      questionCount: 2,
      totalQusCount: 0
    }
  }

  getQuestions(product_id, count) {
    //console.log(`${product_id}`);
    axios.get('http://localhost:3000/questions', {
      params: {
        product_id: `${product_id}`,
        count: `${count}`
      }
    })
      .then((res) => {
        //console.log(res.data);
        const questions = [];
        const totalQusCount = Object.keys(res.data.results).length;
        //console.log(this.state.totalQusCount, totalQusCount);
        questions.push(res.data);

        this.setState({
          qna: [...questions],
          questionCount: this.state.questionCount + 2,
          totalQusCount: totalQusCount
        })
      })
      .catch((err) => {
        console.log("client get questions err" + err);
      })
  }

  componentDidMount() {
    this.getQuestions(this.props.curProductID, this.state.questionCount);
    //this.markQuestionHelpful(631400);
  }


  render() {
    //console.log("here" + this.state.totalQusCount);
    return (
      <div className="qna">
        <p>QUESTIONS & ANSWERTS</p>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <QuestionsList qna={this.state.qna} getQuestions={this.getQuestions.bind(this)}
          count={this.state.questionCount} total={this.state.totalQusCount} product_id={this.props.curProductID}
        />
    </div>
    )
  }
}

export default QnA;