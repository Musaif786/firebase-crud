import React from 'react';
 import {auth, provider} from '../firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Loginpage({ setIsauth}) {
 let navigate = useNavigate();
  const signinwithgoogle = ()=>{
    signInWithPopup(auth, provider).then((result)=>{
     localStorage.setItem("isauth",true)
      setIsauth(true);
      navigate("/")
    })
  }

  return <>

    <div className='login'>
      <h1>Login Page</h1>
      <p>Signup with google to continue</p>
      <button onClick={signinwithgoogle} className='btn btn-success'>Signup with google</button>
    </div>
  </>;
}

export default Loginpage;
