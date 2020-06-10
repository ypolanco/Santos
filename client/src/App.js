import React, { Component } from "react";
import Login from "./components/Login";
import { loginUser, registerUser} from "./services/auth";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }

  render() {
    return (
      <div>
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
        />
      </div>
    );
  }
}
