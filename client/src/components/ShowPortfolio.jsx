import React from "react";
import { Link } from "react-router-dom";
import "./ShowPortfolio.css";

export default function ShowPortfolios(props) {
  const { portfolios, destroyPortfolio } = props;

  // console.log("hello", portfolios)
  console.log("props", props);

  return (
    <>
      <hr />
      <div className="main-container">
        <div className="title">
          <h3 className="section">Portfolios</h3>

          <Link to="/new/portfolio">
            <button className="">Add Portfolio</button>
          </Link>
        </div>

        {portfolios.map((port) => (
          <>
            <Link to={`/portfolios/${port.id}/securities`} key={port.name}>
              <p key={port.id}>{port.name}</p>
            </Link>
            <Link to={`/portfolios/${port.id}/edit`}>
              <button> Edit Portfolio </button>
            </Link>
            <button onClick={() => destroyPortfolio(port.id)}>
              Delete Portfolio
            </button>
          </>
        ))}
      </div>
    </>
  );
}
