import React from "react";

export default function ShowPortfolios(props) {
  const { portfolios } = props;

  console.log("hello", portfolios)


  return (
    <>
      <hr />
      <h3>Portfolios</h3>
      {/* {portfolios.map((port) => (
        <p key={port.id}>{port.name}</p>
      ))} */}
    </>
  );
}
