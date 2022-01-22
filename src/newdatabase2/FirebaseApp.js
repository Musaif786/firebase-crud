import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut,signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
import React ,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import fireDb from "../firebase";
import Hero from './Hero';
import Logins from './Logins';


function FirebaseApp() {
    const [user, setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailerror,setEmailerror] = useState("");
    const [passworderror,setPassworderror] = useState("");
    const [hasaccount,setHasaccount] = useState(false);
  const clearInput =()=>{
      setEmail("");
      setPassword("");
  }
  const clearError = ()=>{
      setEmailerror("");
      setPassworderror("");
  }
    const login =async ()=>{
        clearError();
     const logs = await signInWithEmailAndPassword(auth,email,password)
        .catch(err=>{toast.error("error"+err); switch(err.code){
            case "auth/invalid-email":
                case "auth/user-disable":
                    case "auth/user-not-found":
                        setEmailerror(err.message);
                        break;
            case "auth/wrong-password":
                setPassworderror(err.message);
                break;
        }})


    }

    const signup =async ()=>{
        clearError();
       
        
        const logs = await createUserWithEmailAndPassword(auth,email,password)
        .catch(err=>{toast.error("error"+err); switch(err.code){
            case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailerror(err.message);
                        break;
            case "auth/weak-password":
                setPassworderror(err.message);
                break;
        }})

    }

    const logout=()=>{
  signOut(auth);

    }
    
    const authListtener = ()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                clearInput();
                setUser(user);
            }else{
                setUser("");
            }
        })
    }


    useEffect(()=>{
       authListtener();
    },[]);

    const signinwithgoogle = ()=>{
        signInWithPopup(auth, provider);
    
      }
  return <>
      <div>
     {user ? ( <Hero logout={logout} authListtener={authListtener} user={user}/>):(

     
      <Logins email={email} setEmail={setEmail} password={password} setPassword={setPassword} login={login} signup={signup} hasaccount={hasaccount} setHasaccount={setHasaccount} emailerror={emailerror} passworderror={passworderror} signinwithgoogle={signinwithgoogle}/>
      )}
     
      </div>
  </>;
}

export default FirebaseApp;
