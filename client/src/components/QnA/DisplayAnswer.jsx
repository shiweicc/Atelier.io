import React from 'react';
import axios from 'axios';
import SignleAnswer from './SignleAnswer.jsx';


var answers = [];
class DisplayAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: [],
      answerCount: 2,
      totalAnsCount: 0
    }
  }

  getAnswers(question_id, count) {
    console.log("get answers from question", `${question_id}`);
    //console.log(`${count}`);
    axios.get('http://localhost:3000/answers', {
      params: {
        question_id: `${question_id}`,
        count: `${count}`
      }
    })
      .then((res) => {
        //console.log(res.data);
        const totalAnsCount = Object.keys(res.data).length;
        //console.log(totalAnsCount);
        answers = res.data;
        var name = [];
        var s = [];
        for (var i = 0; i < totalAnsCount; i++) {
          if (answers[i].answerer_name === 'Seller') {
            //console.log(answers[i].answerer_name, i);
            s.push(answers[i]);
            name.push(i);
          }
        }
        //console.log(name);
        for (var j = 0; j < name.length; j++) {
          answers.splice(name[j], 1);
          answers.unshift(s[j]);
        }
       // console.log(answers);
        this.setState({
          ans: [...answers],
          totalAnsCount: totalAnsCount
        })
      })
      .catch((err) => {
        console.log("client get answers err" + err);
      })
  }



  componentDidMount() {
    this.getAnswers(this.props.question_id, this.state.answerCount);
    console.log('check id', this.props.question_id);
  }


  render() {
    console.log("display que_id here", this.props.question_id);
    return (
      < div className="answerList" >
        <SignleAnswer ans={this.state.ans} getAnswers={this.getAnswers.bind(this)} que_id={this.props.question_id}
          total={this.state.totalAnsCount} />
      </div >

    )
  }

}

export default DisplayAnswer;