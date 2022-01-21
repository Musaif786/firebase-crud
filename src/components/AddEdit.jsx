import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/AddEdit.css";
import fireDb from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast} from "react-toastify";



const initialstate = {
    name:"",
    email:"",
    contact:"",
    comment:""
}


const AddEdit = () => {
    const [state,  setState]= useState(initialstate);
    const [data, setData] = useState({});

    const {name,email,contact,comment}= state;

    const history = useNavigate();
    const handleinput = (e)=>{
  const {name,value}=e.target;
  setState({...state,[name]:value})

    }
    const handlesubmit = (e)=>{
   e.preventDefault();
   if(!name || !email || !contact){
       toast.error("plzz provide value in each input field")
   }else{
       fireDb.child("contact").push(state, (err)=>{
           if(err){
               toast.error(err);
           }else{
               toast.success("contact added successfully");
           }
       });
       setTimeout(()=> history("/"),2000);
   }
    }
    return (
        <div style={{marginTop: "8px"}}>
         <h1>Contact</h1>
            <form onSubmit={handlesubmit} style={{margin: "auto",padding:"15px",alignContent:"center",maxWidth:"400px"}}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" placeholder='fullname' value={name} onChange={handleinput} />
      
  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" placeholder='email' value={email} onChange={handleinput} />
      
  <label htmlFor="contact">contact</label>
  <input type="number" name="contact" id="contact" placeholder='contact' value={contact} onChange={handleinput} />

  <label htmlFor="comment">Comment</label>
  <textarea cols="40" rows="5" type="text" name="comment" id="comment" placeholder='comment here...' value={comment} onChange={handleinput} />

      <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddEdit;
