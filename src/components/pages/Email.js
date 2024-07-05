import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      telephone: '',
      message: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3003/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        telephone: this.state.telephone,
        message: this.state.message,
      }
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: '', email: '', telephone: '', message: '' });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onTelephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <AppWrapper>
        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email address</Label>
            <Input name="email" type="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="telephone">Telephone number</Label>
            <Input name="telephone" type="tel" id="telephone" value={this.state.telephone} onChange={this.onTelephoneChange.bind(this)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </AppWrapper>
    );
  }
}

export default Email;

