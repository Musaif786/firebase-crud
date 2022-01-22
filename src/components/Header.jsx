import React,{useEffect,useState} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import "../css/Header.css";
import {signOut} from 'firebase/auth';
import {auth} from  '../firebase';


const Header = () => {
    const [activeTab, setActiveTab]= useState("home");
    const [ isauth , setIsauth] = useState(false);

    let navigator = useNavigate();

    const signuserout = ()=>{
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsauth(true);
     navigator("/login");
    // window.location.pathname = "/postpage";
      })
  
    }
    
    

    return (
        <>
          <header className='header'>
          {/* className={ `${activeTab === "home" ? "active" : ""}`} onClick ={() =>setActiveTab("Home")} */}
          <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  {/* <li class="nav-item">
    <Link class="nav-link " aria-current="page" to="/postpage">Create post</Link>
  </li> */}
  
  
  {/* { !(isauth == false) ? (

  
  <Link class="nav-link " aria-current="page" to="/login">Login page</Link> ) : (
    <>
    <Link class="nav-link " aria-current="page" to="/postpage">postpage</Link>
    <li>

    <button onClick={signuserout} className='btn-sm btn-danger'>logout</button>
    </li>
    </>

  )} */}

  <Link class="nav-link " aria-current="page" to="/home">Database</Link> 
  <Link class="nav-link " aria-current="page" to="/postpage">Comment box</Link> 
  <Link class="nav-link " aria-current="page" to="/test">testing</Link> 
  
</ul>

          </header>  
        </>
    )
}

export default Header
