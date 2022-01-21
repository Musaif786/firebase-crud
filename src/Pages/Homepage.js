import React,{useEffect,useState} from 'react'
import { useNavigate} from "react-router-dom";
import {signOut} from 'firebase/auth';
import {auth} from  '../firebase';

function Homepage() {

  const [isauth, setIsauth]= useState(false);

    let navigator = useNavigate();

  const signuserout = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsauth(false);
   navigator("/login");
  // window.location.pathname = "/postpage";
    })

  }


  
 
  
  return <div>
      <h1>Im home page</h1>
      
      
      {/* <button onClick={signuserout} className='btn-sm btn-danger'>logout</button> */}
  </div>;
}

export default Homepage;
