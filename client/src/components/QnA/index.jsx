import React from 'react';
import QuestionsList from './QuestionsList.jsx';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qna: []
    }
  }


  render() {
    return (
    <div>
        <p>QUESTIONS & ANSWERTS</p>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." style={{ width: "370px" }} />
        <QuestionsList qna={this.state.qna} />
    </div>
    )
  }
}

export default QnA;