import React from 'react';
import axios from 'axios';

class ModalQue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQuestion: '',
      name: '',
      email: ''
    }
  }

  handleInputBody(e) {
    const value = e.target.value;
    this.setState({
      inputQuestion: value
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

  insertQuestionClick() {
    const data = {
      body: this.state.inputQuestion,
      name: this.state.name,
      email: this.state.email,
      product_id: this.props.product_id,
    }
    axios.post('http://localhost:3000/addQuestion', data)
      .then((res) => {
        console.log(res.data);
        console.log('add question ', this.props.product_id, this.props.count);
        this.props.postQuestion(this.props.product_id, 10);
      })
      .catch((err) => {
        console.log("Quesion input err" + err);
      })
  };


  render() {
    return (
      <div className="modalBackground" >
        <div className="modalContainer">
          <h2>Ask Your Question</h2>
          <h4>About the [product Name Here] </h4>
          <label>
            Your Quesion:
            <input type="text" id='inputQuestion' value={this.state.inputQuestion} onChange={this.handleInputBody.bind(this)} />
          </label>
          <label>
            What is your nickname:
            <input type="text" placeholder="Example: jack543!" value={this.state.name} onChange={this.handleInputName.bind(this)} />
            <p>For privacy reasons, do not use your full name or email address.</p>
          </label>
          <label>
            Your Email:
            <input type="text" placeholder="Why did you like the product or not?" value={this.state.email} onChange={this.handleInputEmail.bind(this)} />
          </label>

          <p>For authentication reasons, you will not be emailed.</p>
          <button type='botton' onClick={() => this.insertQuestionClick(this.props.questionId)}>Submit</button>
          <button type='button' onClick={() => this.props.closeQueModal(false)}> Cancel</button>
        </div>
      </div >
    );
  }
};


export default ModalQue;