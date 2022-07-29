import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';
import "./style.css";
import S3 from 'react-aws-s3';

const questions = [];
var totalQusCount = 0;
class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qna: [],
      questionCount: 2,
      totalQusCount: 0,
      search: ''
    }
  }

  getQuestions(product_id, newCount) {
    //console.log(`${product_id}`);
    axios.get('http://localhost:3000/questions', {
      params: {
        product_id: `${product_id}`,
        count: 80
      }
    })
      .then((res) => {
        //console.log(res.data);
        totalQusCount = Object.keys(res.data.results).length;
        //console.log(this.state.totalQusCount, totalQusCount);
        while (questions.length > 0) {
          questions.pop();
        }
        questions.push(res.data);
        this.loadQuestions(newCount);
      })
      .catch((err) => {
        console.log("client get questions err" + err);
      })
  }

  loadQuestions(count) {
    //console.log('here', count);
    var list = {};
    list.product_id = questions[0].product_id;
    var resultList = questions[0].results.slice(0, count);
    list.results = resultList;
   // console.log(list);
    const currentQue = [];
    currentQue.push(list);
    this.setState({
      qna: [...currentQue],
      questionCount: this.state.questionCount + 2,
      totalQusCount: totalQusCount,
      search: ''
    });
  }

  handleSearchInput(e) {

    const value = e.target.value;
    this.setState({
      search: value
    })

  }

  search() {
    var list = {};
    list.product_id = questions[0].product_id;
    const v = this.state.search;
    var searchList = [];
    for (var i = 0; i < questions[0].results.length; i++) {
      if (v.length >= 3 && questions[0].results[i].question_body.includes(v)) {
        searchList.push(questions[0].results[i]);
      }
    }
    list.results = searchList;
    const currentQue = [];
    currentQue.push(list);
    this.setState({
      qna: [...currentQue],
    });
    if (this.state.search.length < 3) {
      this.componentDidMount();
    }

  }


  componentDidMount() {
    // this.getQuestions(this.props.curProductID, this.state.questionCount);
    this.getQuestions(this.props.curProductID, this.state.questionCount);
  }


  render() {
    //console.log("here" + this.state.totalQusCount);
    return (
      <div className="qna">
        <p>QUESTIONS & ANSWERTS</p>
        <input className='search' type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={this.state.search} onChange={this.handleSearchInput.bind(this)} />
        <input className='search' type="submit" value='Search' onClick={this.search.bind(this)}></input>
        <QuestionsList qna={this.state.qna} loadQuestions={this.loadQuestions.bind(this)} getQuestions={this.getQuestions.bind(this)}
          count={this.state.questionCount} total={this.state.totalQusCount} product_id={this.props.curProductID}
          product_name={this.props.desc.name}
        />
      </div>
    )
  }
}

export default QnA;