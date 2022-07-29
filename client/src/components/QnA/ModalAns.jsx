import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';


class ModalAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnswer: '',
      name: '',
      email: '',
      photos: []
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
      email: this.state.email,
      photos: this.state.photos
    }

    const vaildEmail = /\S+@\S+\.\S+/.test(this.state.email);
    //console.log(this.state.email, vaildEmail);
    if (!data.body || !data.name || !vaildEmail) {
      swal({
        html: true,
        title: "You must enter the following: ",
        text: "1. Any mandatory fields are bland \n 2. The email address provided is not in correct email format"
      });
    } else {
    axios.post('http://localhost:3000/addAnswer', data)
      .then((res) => {
        //console.log("add que", this.props.questionId, this.props.questionId);
        this.props.accessDisplayAnswer(this.props.questionId, 5);
      })
      .catch((err) => {
        console.log("Answer input err" + err);
      })
    }
  };


  onImageChange = (event) => {
    const file = event.target.files[0];
    //console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'garamond');

    axios.post('https://api.cloudinary.com/v1_1/tidibubu/image/upload', formData)
      .then((res) => {
        //console.log(res);
        const urlList = [];
        const url = res.data.secure_url;
        //console.log(url);
        urlList.push(url);
        this.setState({
          photos: [...urlList]
        })
      })

  };



  render() {
    return (
      <div className="modalBackground" >
        <div className="modalContainer">
          <h2>Submit your Answer</h2>
          <h4>{this.props.product_name} : {this.props.question_body}</h4>
          <label className='modalLabel'>
            Your Answer:
            <input type="text" id='inputAnswer' value={this.state.inputAnswer} onChange={this.handleInputBody.bind(this)} />
          </label>

          <label className='modalLabel'>
            What is your nickname:
            <input type="text" placeholder="Example: jack543!" value={this.state.name} onChange={this.handleInputName.bind(this)} />
            <p>For privacy reasons, do not use your full name or email address.</p>
          </label>
          <label className='modalLabel'>
            Your Email:
            <input type="text" placeholder="Example: jack@email.com" value={this.state.email} onChange={this.handleInputEmail.bind(this)} />
            <p>For authentication reasons, you will not be emailed.</p>
          </label>
          <label for="exampleInputFile">Upload Your Pictures</label>
          <input type="file" id="myImage" name="myImage" onChange={this.onImageChange.bind(this)} />
          <button className='modalButton' type='botton' onClick={() => this.insertAnswerClick(this.props.questionId)}>Submit</button>
          <button className='modalButton' type='button' onClick={() => this.props.closeAnsModal(false)}>Cancel</button>

        </div>
      </div>
    );
  };
}

export default ModalAns;