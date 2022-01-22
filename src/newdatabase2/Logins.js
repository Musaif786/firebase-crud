import React from 'react';

function Logins(props) {
    const { email,
         setEmail,
          password,
          setPassword,
          login,
          signup,
          hasaccount,
          setHasaccount,
          emailerror,
          passworderror} = props;
  return( <> 
    <div className='container '>
    <h1>Form</h1>
    <div style={{maxWidth:"400px", margin:"0px auto"}}>
    <label htmlFor="email">Email</label>
    <input type="text" autoFocus required name="" id="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <p>{emailerror}</p>
    <label htmlFor="password">Password</label>
    <input type="text" name="password" id="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <p>{passworderror}</p>
    <div>
  {hasaccount ? (<>
      <button onClick={login} className='btn btn-success'>Signin</button>
      <p>Don't have account ? <span onClick={()=>{setHasaccount(!hasaccount)}}>Signup</span></p>
  </>):(<>
      <button onClick={signup} className='btn btn-success'>Signup</button>
      <p>have an accont ? <span className='fs-bold' onClick={()=>{setHasaccount(!hasaccount)}}>Login</span></p>
  </>)}
    </div>
    </div>
    </div>
    </>);
}

export default Logins;
