import React,{useEffect,useState} from 'react'
import {Link, useLocation} from "react-router-dom";
import "../css/Header.css";


const Header = () => {
    const [activeTab, setActiveTab]= useState("home");
    return (
        <>
          <header className='header'>
          {/* className={ `${activeTab === "home" ? "active" : ""}`} onClick ={() =>setActiveTab("Home")} */}
          <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " aria-current="page" to="/add">Add Contact</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " aria-current="page" to="/about">About</Link>
  </li>
  
</ul>

          </header>  
        </>
    )
}

export default Header
