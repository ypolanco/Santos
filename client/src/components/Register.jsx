import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/SantosLogo.png";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <>
        <div className="register">
          <div className="logo">
            <img src={logo} alt="" className="logo" />
          </div>
          
          <form className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegisterSubmit(this.state);
              history.push("/");
              this.setState({
                username: "",
                email: "",
                password: "",
              });
            }}
          >
            <h3 className="header">Register</h3>
            <label htmlFor="username" className="label">
              Username
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="email" className="label">
              Email
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="password" className="label">
              Password
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button className="button">Create Account</button>
          </form>
        </div>
      </>
    );
  }
}
