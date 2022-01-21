  import React,{useState,useEffect} from 'react'
  import { useNavigate } from 'react-router-dom';
  import "../css/AddEdit.css";
  import fireDb, { db ,auth } from "../firebase";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import {toast} from "react-toastify";
  import {addDoc, collection} from "firebase/firestore";
  
  
  
  
  const Createpost= () => {

    const [title, setTitle] = useState({});
    const [post, setPost] = useState({});

    const navigate = useNavigate();

  
const postcollection = collection(db, "post");

 const createpost = async (e)=>{
   e.preventDefault();
   await addDoc(postcollection, {title, post,author: {name:auth.currentUser.displayName, id:auth.currentUser.uid}
    
  });
  navigate("/");
 }
      
 
      return (
          <div style={{marginTop: "8px"}}>
           <h1>Contact</h1>
              <form onSubmit={createpost} style={{margin: "auto",padding:"15px",alignContent:"center",maxWidth:"400px"}}>
    <label htmlFor="name">Name</label>
    <input placeholder='fullname' onChange={(e)=>{setTitle(e.target.value)}} />
     
  
    <label htmlFor="comment">Comment</label>
    <textarea cols="40" rows="5" placeholder='comment here...' onChange={(e)=>{setPost(e.target.value)}} />
  
        <input type="submit" value="Submit"/>
              </form>
          </div>
      )
  }
  
  export default Createpost;
  