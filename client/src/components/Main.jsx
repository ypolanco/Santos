import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import { getAllPortfolios } from "../services/portfolio";
import ShowPortfolios from "./ShowPortfolio";
import Register from './Register';
// import { getAllFlavors } from '../services/flavors';
// import { getAllFoods, createFood, deleteFood } from '../services/foods';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';

export default class Main extends Component {
  state = {
    portfolio: [],
    securities: [],
  };

  componentDidMount() {
    this.getPortfolio();
    // this.getFoods();
  }

  // ============================
  // ========== Portfolios =========
  // ============================

  getPortfolio = async () => {
    const portfolios = await getAllPortfolios();
    this.setState({ portfolios });
  };

  // ============================
  // ========== Foods ===========
  // ============================

  // getFoods = async () => {
  //   const foods = await getAllFoods();
  //   this.setState({ foods });
  // }

  // postFood = async (foodData) => {
  //   const newFood = await createFood(foodData);
  //   this.setState(prevState => ({
  //     foods: [...prevState.foods, newFood]
  //   }))
  // }

  // destroyFood = async (id) => {
  //   await deleteFood(id);
  //   this.setState(prevState => ({
  //     foods: prevState.foods.filter(food => food.id !== id)
  //   }))
  // }



  render() {
    // console.log(this.state.portfolios)
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
       <Route path='/user/register' render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
        <Route path='/portfolios' render={() => (
          <ShowPortfolios
            portfolios={this.state.portfolios}
          />
        )} />
        {/* <Route path='/foods' render={() => (
          <ShowFoods
            foods={this.state.foods}
            currentUser={this.props.currentUser}
            destroyFood={this.destroyFood}
          />
        )} /> */}
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
