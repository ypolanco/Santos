import React, { Component } from 'react'
import "./CreatePortfolio.css"
import logo from "./images/SantosLogo.png";

export default class CreatePortfolio extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state;
    const { postPortfolio, history } = this.props;
    return (
      <div className="create-form">
      <img src={logo} alt="Santos Logo" className="logo"/>
      <form onSubmit={(e) => {
        e.preventDefault();
        postPortfolio(this.state);
        history.push('/portfolios');
        this.setState({
          name: ""
        })
      }}>
        <h3>Create Portfolio</h3>
          <label htmlFor="name">Name</label>
          <br/>
        <input
          id="id"
          type="text"
          value={name}
            onChange={this.handleChange}
            className="input-create-port"
        />
        <button className="create-port-button">create</button>
        </form>
        </div>
    )
  }
}
