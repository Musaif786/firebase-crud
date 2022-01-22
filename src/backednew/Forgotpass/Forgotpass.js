import React, {useState} from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut,signInWithPopup} from "firebase/auth";
import {auth, provider} from "../../firebase";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

function Forgotpass() {
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [cpass , setCpass] = useState("");
    const [cemail , setCemail] = useState("");

    const signup = async ()=>{
        try{
       
          const users = await createUserWithEmailAndPassword(auth,email);
          toast.success("successfull sended email");
          
        }catch(error){
            
            toast.error("error: enter valid gmail and strong password");
        }
      } 
  return <>
    <div>
        {/* signin up */}
        <h1>Signup</h1>
        <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />

        
        {/* <input placeholder='password' onChange={(e)=>{setPass(e.target.value)}} /> */}

        <button onClick={signup}>Submit</button>
      </div>
      <hr />
  </>;
}

export default Forgotpass;
