import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props){
    
    super(props);
    this.state = {
      email: '',
      password: '',
      emailState: '',
      passwordState: '',
      messageEmailState:'hidden',
      messagePasswordState:'hidden'
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    if(this.state.email === ""){
      event.preventDefault();
      this.setState({emailState: 'error'});
      this.setState({messageEmailState: 'show'});
    }
    if(this.state.password === ""){
      event.preventDefault();
      this.setState({passwordState: 'error'});
      this.setState({messagePasswordState: 'show'});
    }
    if(this.state.emailState === "error"){
      event.preventDefault();
      this.setState({messageEmailState: 'show'});
    }
    if(this.state.passwordState === "error"){
      event.preventDefault();
      this.setState({messagePasswordState: 'show'});
    }
  }
  handleEmailChange(event){
    this.setState({email: event.target.value});
    console.log(event.target.value);
    var regularExpressionEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regularExpressionEmail.test(event.target.value) ) {
      this.setState({emailState: 'normal'});
      this.setState({messageEmailState: 'hidden'});
    }else{
      this.setState({emailState: 'error'});
    }
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value})
    var regularExpressionPassword = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/;
    if (regularExpressionPassword.test(event.target.value) ) {
      this.setState({passwordState: 'normal'});
      this.setState({messagePasswordState: 'hidden'});
    }else{
      this.setState({passwordState: 'error'});
    }   

    console.log(event.target.value);
  
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={"email-wrapper"+" "+this.state.emailState+" "+this.state.messageEmailState}>
          <input
            type="text"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className={this.state.emailState}
          />
          <span className="message">Invalid Username</span>
        </div>
        <div className={"password-wrapper"+" "+this.state.passwordState+" "+this.state.messagePasswordState}>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <span className="message">Invalid Password</span>
        </div>
        <button>Save</button>
        <span>Forgot your password? <a href="#">Reset it here.</a></span>
      </form>
    );
  }
}

export default Form;