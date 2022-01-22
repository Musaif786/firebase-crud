import React, {useState} from 'react';
import {db} from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut,signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

function SinglePage() {
  const [email , setEmail] = useState("");
  const [pass , setPass] = useState("");
  const [cpass , setCpass] = useState("");
  const [cemail , setCemail] = useState("");
  const [hasaccount,setHasaccount] = useState(false);
  const [user, setUser] = useState({});


  const navigate = useNavigate();

  onAuthStateChanged(auth, (user)=>{
    setUser(user);
  })

  const signup = async ()=>{
    try{

      const users = await createUserWithEmailAndPassword(auth,email,pass);
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

  const signinwithgoogle = ()=>{
    signInWithPopup(auth, provider);

  }
  return( <>
      
      <div>

        { user ? (<> 
        <button onClick={logout }>Logout</button>
         <h2>User details :  {user?.email}</h2>
         </>):(<>
          <div>
          <h1>Login</h1>
        <label htmlFor="email">Email</label>
    <input type="text" autoFocus required name="" id="email" placeholder='email'  onChange={(e)=>{setCemail(e.target.value)}} />
<label htmlFor="password">Password</label>
    <input type="text" name="password" id="password" placeholder='password'  onChange={(e)=>{setCpass(e.target.value)}} />
<button onClick={login }>Submit</button>
        </div>
        <button  onClick={ signinwithgoogle }>signinwithgoogle</button>
        </>) }
      </div>

        
      
  </>);
}

export default SinglePage;
