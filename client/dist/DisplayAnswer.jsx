import React from 'react';
import axios from 'axios';
import SignleAnswer from './SignleAnswer.jsx';



class DisplayAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: []
    }
  }

  getAnswers(question_id, count) {
    console.log(`${question_id}`);
    console.log('here');
    axios.get('http://localhost:3000/answers', {
      params: {
        question_id: `${question_id}`,
        count: `${count}`
      }
    })
      .then((res) => {
        console.log(res.data);
        this.setState(() => {
          return {
            ans: [...res.data]
          }
        })
      })
  }

  func = (count) => {
    console.log('from answer', count);
  }

  componentDidMount() {
    this.getAnswers(this.props.answers, 2);
  }


  render() {

    return (
      < div className="answerList" >
        <SignleAnswer ans={this.state.ans} />
      </div >
    )
  }

}

export default DisplayAnswer;
