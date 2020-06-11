import React from "react";
import { Link } from "react-router-dom";

export default function ShowPortfolios(props) {
  const { portfolios } = props;

  // console.log("hello", portfolios)
console.log("props",props);

  return (
    <>
      <hr />
      <h3>Portfolios</h3>
      {portfolios.map((port) => (
        <Link to={`/portfolios/${port.id}/securities`} key={port.name}>
          <p key={port.id}>{port.name}</p>
        </Link>
      ))}
    </>
  );
}
