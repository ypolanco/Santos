import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowSecurities(props) {
  const [id, setId] = useState(props.match.match.params.id);
  console.log(props);

  const { securities, currentUser, destroySecurities, getSecurities, portfolios } = props;
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

  return (
    <>
      <hr />
      {/* {portfolios.map((port) => (
        <h3>{port.name}</h3>
      ))} */}
      <h3>Securities</h3>
      {securities.map((security) => (
        <React.Fragment key={security.id}>
          <p>{security.ticker}</p>
          {currentUser && currentUser.id === security.portfolio_id && (
            <>
              <button>edit</button>
              <button onClick={() => destroySecurities(security.id)}>
                delete
              </button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      {/* <Link to='/new/food'><button>Create</button></Link> */}
    </>
  );
}
