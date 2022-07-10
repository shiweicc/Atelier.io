import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qna: [],
      questionCount: 2
    }
  }

  getReviews(product_id, count) {
    //console.log(`${product_id}`);
    axios.get('http://localhost:3000/questions', {
      params: {
        product_id: `${product_id}`,
        count: count
      }
    })
      .then((res) => {
        console.log(res.data);
        const questions = [];
        questions.push(res.data);
        this.setState(() => {
          return {
            qna: [...questions]
          }
        })
      })
  }



  componentDidMount() {
    this.getReviews(this.props.curProductID, this.state.questionCount);
    //this.getAnswers();
  }


  render() {
    return (
    <div>
        <p>QUESTIONS & ANSWERTS</p>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." style={{ width: "370px" }} />
        <QuestionsList qna={this.state.qna} onLoad={this.getReviews.bind(this)} />
    </div>
    )
  }
}

export default QnA;