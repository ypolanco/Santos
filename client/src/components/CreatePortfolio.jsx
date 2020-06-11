import React, { Component } from 'react'

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
      <form onSubmit={(e) => {
        e.preventDefault();
        postPortfolio(this.state);
        history.push('/portfolios');
        this.setState({
          name: ""
        })
      }}>
        <hr />
        <h3>Create Portfolio</h3>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <button>create</button>
      </form>
    )
  }
}
