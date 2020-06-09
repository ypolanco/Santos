import React, { Component } from "react";
import Login from "./components/Login";
import { loginUser } from "./services/auth";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  render() {
    return (
      <div>
        <Login handleLoginSubmit={this.props.handleLoginSubmit} />
      </div>
    );
  }
}
