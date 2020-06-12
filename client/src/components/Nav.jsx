import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <h1>Santos</h1>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/'></Link>
      }
      <hr />
      {
        props.currentUser && (
          <nav>
            <NavLink to="/portfolios">Portfolios</NavLink>
          </nav>
        )
      }
    </div>
  )
}