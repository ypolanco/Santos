import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/SantosLogo.png";
import "./Nav.css"


export default function Header(props) {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="" className="nav-logo"/>
        <h1>Santos</h1>
      </div>
      {props.currentUser ? (
        <>
          <h4 className="username">Welcome {props.currentUser.username}</h4>
          <button onClick={props.handleLogout} className="nav-logout">Logout</button>
        </>
      ) : (
        <Link to="/"></Link>
      )}
  
    </div>
  );
}
