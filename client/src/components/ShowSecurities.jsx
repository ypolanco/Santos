import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowSecurities(props) {
  const { securities, currentUser, destroySecurities } = props;
  console.log("securities",securities);
  console.log("Users", currentUser);
  

  
  return (
    <>
      <hr />
      <h3>Securities</h3>
      {
        securities.map(security => (
          <React.Fragment key={security.id}>
             <p>{security.ticker}</p>
            {
              currentUser && currentUser.id === security.portfolio_id && (
                <>
                  
                  <button>edit</button>
                  <button onClick={() => destroySecurities(security.id)}>delete</button>
                </>
              )
            }
          </React.Fragment>
        ))
      }
      <br />
      {/* <Link to='/new/food'><button>Create</button></Link> */}
    </>
  )
}
