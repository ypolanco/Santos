import React, { Component } from "react";
import "./UpdatePortfolio.css"
import logo from "./images/SantosLogo.png"

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
      <div className="edit-port">

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
          <div className="main-edit">
          <h3 className="edit-header">Update Portfolio</h3>
            <label htmlFor="name" className="label-edit">Name</label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
            <button className="button-edit">Update</button>
            </div>
        </form>
      </div>
    );
  }
}
