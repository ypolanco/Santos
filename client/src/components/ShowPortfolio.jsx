import React from "react";
import { Link } from "react-router-dom";

export default function ShowPortfolios(props) {
  const { portfolios, destroyPortfolio } = props;

  // console.log("hello", portfolios)
  console.log("props", props);

  return (
    <>
      <hr />
      <h3>Portfolios</h3>
      <Link to="/new/portfolio">
        <button>Add Portfolio</button>
      </Link>

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
    </>
  );
}
