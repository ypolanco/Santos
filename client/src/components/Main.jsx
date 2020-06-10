import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import { getAllPortfolios } from "../services/portfolio";
import ShowPortfolios from "./ShowPortfolio";
import Register from "./Register";
// import { getAllFlavors } from '../services/flavors';
import { getAllSecurities, deleteSecurities } from "../services/securities";
import ShowSecurities from './ShowSecurities';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';

export default class Main extends Component {
  state = {
    portfolio: [],
    securities: [],
  };

  componentDidMount() {
    this.getPortfolio();
    this.getSecurities();
  }

  // ============================
  // ========== Portfolios =========
  // ============================

  getPortfolio = async () => {
    const portfolios = await getAllPortfolios();
    this.setState({ portfolios });
  };

  // ============================
  // ========== Securities ===========
  // ============================

  getSecurities = async () => {
    const securities = await getAllSecurities();
    this.setState({ securities });
  };

  // postFood = async (foodData) => {
  //   const newFood = await createFood(foodData);
  //   this.setState(prevState => ({
  //     foods: [...prevState.foods, newFood]
  //   }))
  // }

  destroySecurity = async (id) => {
    await deleteSecurities(id);
    this.setState(prevState => ({
     securities: prevState.securities.filter(security => security.id !== id)
    }))
  }

  render() {
    console.log("user",this.props.currentUser)
    return (
      <main>
        <Route
          path="/user/login"
          render={(props) => (
            <Login
              {...props}
              handleLoginSubmit={this.props.handleLoginSubmit}
            />
          )}
        />
        <Route
          path="/user/register"
          render={(props) => (
            <Register
              {...props}
              handleRegisterSubmit={this.props.handleRegisterSubmit}
            />
          )}
        />
        <Route
          path="/portfolios"
          render={() => <ShowPortfolios portfolios={this.state.portfolios} />}
        />
        <Route
          path="/securities"
          render={() => (
            <ShowSecurities
              securities={this.state.securities}
              currentUser={this.props.currentUser}
              destroySecurity={this.destroySecurity}
            />
          )}
        />
        {/* <Route path='/new/food' render={(props) => (
          <CreateFood
            {...props}
            postFood={this.postFood}
          />
        )} /> */}
      </main>
    );
  }
}
