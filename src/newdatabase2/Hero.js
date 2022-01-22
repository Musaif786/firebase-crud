import React from 'react';

function Hero({logout,authListtener ,user}) {
  return <>
      <div>
          <h1>Welcome</h1>
          <button onClick={logout}>Logout</button>

          <h2>User loggined:  {user?.email}</h2>
      </div>
  </>;
}

export default Hero;
