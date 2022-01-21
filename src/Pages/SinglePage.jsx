import React, {useState} from 'react';
import {db} from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";
import { toast } from 'react-toastify';

function SinglePage() {
  const [email , setEmail] = useState("");
  const [pass , setPass] = useState("");
  const [cpass , setCpass] = useState("");
  const [cemail , setCemail] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })

  const signup = async ()=>{
    try{

      const user = await createUserWithEmailAndPassword(auth,email,pass);
      toast.success("successfull login");
      
    }catch(error){
        
        toast.error("error: enter valid gmail and strong password");
    }
  } 

  const login = async ()=>{
 try{
   const user = await signInWithEmailAndPassword(auth, cemail,cpass);
   toast.success("loggedin successfully");
   console.log(user);
 }catch(error){
   toast.error("error"+error);
 }
  } 
  
  const logout = async ()=>{
    try{

      await signOut(auth);
      toast.success("logout")
    }catch(err){
      toast.error("user empty");
    }

  } 
  return <>
      <div>
        {/* signin up */}
        <h1>Signup</h1>
        <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />

        
        <input placeholder='password' onChange={(e)=>{setPass(e.target.value)}} />

        <button onClick={signup}>Submit</button>
      </div>
      <hr /><hr />






      {/* login */}
      <div>

      <h1>Login </h1>
      <input placeholder='Conform Email' onChange={(e)=>{setCemail(e.target.value)}} />

        
<input placeholder='Conform password' onChange={(e)=>{setCpass(e.target.value)}} />

<button onClick={login}>Submit</button>
      </div>


      <div>
        <h2>User details :  {user?.email}</h2>

        <button onClick={logout}>Logout</button>
      </div>
  </>;
}

export default SinglePage;
