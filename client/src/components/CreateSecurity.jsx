import React, { Component } from "react";

export default class CreateSecurity extends Component {
  state = {
    name: "",
    ticker: "",
    ftWH: 0,
    ftWL: 0,
    purchase_price: 0,
    position_size: 0,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { ticker, price, ftWH, ftWL, purchase_price, position_size } = this.state;
    const { postSecurity, history } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postSecurity(this.state);
          history.push("/securities");
          this.setState({
            ticker: "",
            ftWH: 0,
            ftWL: 0,
            purchase_price: 0,
            position_size: 0,
          });
        }}
      >
        <hr />
        <h3>Create Security</h3>
        <label htmlFor="ticker">Ticker:</label>
        <input
          id="id"
          type="text"
          value={ticker}
          onChange={this.handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="id"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <label htmlFor="ftWH">52 Week High:</label>
        <input
          id="id"
          type="number"
          value={ftWH}
          onChange={this.handleChange}
        />
        <label htmlFor="ftWL">52 Week Low:</label>
        <input
          id="id"
          type="number"
          value={ftWL}
          onChange={this.handleChange}
        />
        <label htmlFor="purchase_price">Purchase Price:</label>
        <input
          id="id"
          type="number"
          value={purchase_price}
          onChange={this.handleChange}
        />
        <label htmlFor="position_size">Purchase size:</label>
        <input
          id="id"
          type="number"
          value={position_size}
          onChange={this.handleChange}
        />
        <button>Create</button>
      </form>
    );
  }
}
