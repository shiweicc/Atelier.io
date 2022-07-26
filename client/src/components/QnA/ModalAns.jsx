import React from 'react';
import axios from 'axios';

class ModalAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnswer: '',
      name: '',
      email: ''
    }
  }

  handleInputBody(e) {
    const value = e.target.value;
    this.setState({
      inputAnswer: value
    })
  }

  handleInputName(e) {
    const value = e.target.value;
    this.setState({
      name: value
    })
  }

  handleInputEmail(e) {
    const value = e.target.value;
    this.setState({
      email: value
    })
  }

  insertAnswerClick(question_id) {
    const data = {
      question_id: question_id,
      body: this.state.inputAnswer,
      name: this.state.name,
      email: this.state.email
    }
    axios.post('http://localhost:3000/addAnswer', data)
      .then((res) => {
        this.props.accessDisplayAnswer(this.props.questionId, 5);
      })
      .catch((err) => {
        console.log("Answer input err" + err);
      })
  };


  render() {
    return (
      <div className="modalBackground" >
        <div className="modalContainer">
          <h2>Submit your Answer</h2>
          <h4>[product Name Here] : [Quesion Body]</h4>
          <label>
            Your Answer:
            <input type="text" id='inputAnswer' value={this.state.inputAnswer} onChange={this.handleInputBody.bind(this)} />
          </label>
          <label>
            What is your nickname:
            <input type="text" placeholder="Example: jack543!" value={this.state.name} onChange={this.handleInputName.bind(this)} />
            <p>For privacy reasons, do not use your full name or email address.</p>
          </label>
          <label>
            Your Email:
            <input type="text" placeholder="Example: jack@email.com" value={this.state.email} onChange={this.handleInputEmail.bind(this)} />
            <p>For authentication reasons, you will not be emailed.</p>
          </label>
          <button >Upload your photos</button>
          <button type='botton' onClick={() => this.insertAnswerClick(this.props.questionId)}>Submit</button>
          <button type='button' onClick={() => this.props.closeAnsModal(false)}>Cancel</button>
        </div>
      </div>
    );
  };
}

export default ModalAns;