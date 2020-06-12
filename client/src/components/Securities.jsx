import React, { Component } from 'react'
import { getOneSecurity, portToSecurity } from '../services/foods';

export default class Securities extends Component {
  // We need to store the food in state once we make our api.
  // Additionally we have a form in this component so we will
  // need some data for that form in state.
  state = {
    portfolio: null,
    securities: ''
  }

  // setFood will make an api call with the id that we passed from props
  // this it will set state. We're only calling setFood on componentDidMount
  componentDidMount() {
    this.setPort()
  }

  setPort = async () => {
    const port = await getOneSecurity(this.props.securityId);
    this.setState({ port })
  }

  // handleChange and handleSubmit for our select dropdown menu
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      securities: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const port = await portToSecurity(this.state.portfolioId, this.state.securities.id);
    // Since we return the whole food from the backend, we can just replace
    // the whole food object in state.
    this.setState({ port });
  }

  render() {
    const { food } = this.state;
    const { flavors, currentUser } = this.props;
    return (
      <div>
        {
          // Since we have to wait on the api call to return to get our food item
          // we need to add a guard operator here. Then we simply display the food
          // and map over it's flavors
          food && (
            <>
              <h3>{food.name}</h3>
              {food.flavors.map(flavor => (
                <p key={flavor.id}>{flavor.name}</p>
              ))}
              {/* This is our form for the select dropdown */}
              {/* One note about dropdowns in react: the handleChange wont */}
              {/* setState until a change to the dropdown is made */}
              {/* a simple work around is to make a hard coded first option for the dropdown */}
              {
                currentUser && currentUser.id === food.user_id && (
                  <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                      <option>--Select a flavor--</option>
                      {flavors.map(flavor => (
                        <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
                      ))}
                    </select>
                    <button>Add a Flavor</button>
                  </form>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}