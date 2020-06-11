import React, { Component } from "react";

export default class UpdatePortfolio extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    if (this.props.portfolios) {
      this.setPortForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.portfolios !== this.props.portfolios) {
      this.setPortForm();
    }
  }


  setPortForm = () => {
    const { name } = this.props.portfolios;
    this.setState({ name });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name } = this.state;
    const { putPortfolio, history, portfolios } = this.props;
    console.log(portfolios);
    
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putPortfolio(portfolios.id, this.state);
          // history.push("/portfolios");
          // this.setState({
          //   name: "",
          // });
        }}
      >
        <hr />
        <h3>Update Portfolio</h3>
        <label htmlFor="name">Name:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <button>Update</button>
      </form>
    );
  }
}
