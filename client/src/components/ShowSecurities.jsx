import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShowSecurities.css";

export default function ShowSecurities(props) {
  const [id, setId] = useState(props.match.match.params.id);
  const [form, setForm] = useState({ ticker: "" });
  console.log(props);

  const {
    securities,
    currentUser,
    destroySecurities,
    getSecurities,
    portfolios,
    createSecurity,
  } = props;
  console.log("securities", portfolios);
  // console.log("Users", currentUser);

  useEffect(() => {
    getSecurities(props.match.match.params.id);
  }, []);

  useEffect(() => {
    if (props.match.match.params.id != id) {
      getSecurities(props.match.match.params.id);
      setId(props.match.match.params.id);
    }
  }, [props.match.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createSecurity(form);
    setForm("");
  };

  return (
    <div className="securities">
      <hr />
      <div className="securities-header">
        <h3>Securities</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.ticker}
            onChange={(e) =>
              setForm({ ticker: e.target.value, portfolio_id: id })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      
        {securities.map((security) => (
          <React.Fragment key={security.id}>
            <div className="securities-display">
            <h4>Ticker: {security.ticker}</h4>
            <p>Current Price:{security.price}</p>
            <p>52 Week High: {security.ftWH}</p>
            <p>52 Week Low: {security.ftWH}</p>
            {currentUser && currentUser.id === security.portfolio_id && (
              <>
                <button>edit</button>
                <button onClick={() => destroySecurities(security.id)}>
                  delete
                </button>
              </>
              )}
              </div>
          </React.Fragment>
        ))}
      
      {/*  */}
      <br />
    </div>
  );
}
