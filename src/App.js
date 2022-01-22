import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route,Link, Routes ,useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AddEdit from './components/AddEdit';
import View from './components/View';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { useHistory } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Createpost from './Pages/Createpost';
import Loginpage from './Pages/Loginpage';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';
import SinglePage from './Pages/SinglePage';
import Forgotpass from "../src/backednew/Forgotpass/Forgotpass";
import FirebaseApp from './newdatabase2/FirebaseApp';



function App() {
   const [isauth, setIsauth]= useState(false);
  // // let navigator = useNavigate();

  // const signuserout = ()=>{
  //   signOut((auth).then(()=>{
  //     localStorage.clear();
  //     setIsauth(false);
  // // navigator("/login");
  // window.location.pathname = "/postpage";
  //   }))

  // }
  return (
    <>
    <BrowserRouter>
       {/* <Header/>  */}
<div>
{/* 
<header className='header d-flex'>
   

    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
    <Link class="nav-link " aria-current="page" to="/postpage">Create post</Link>

    {!isauth ? <Link class="nav-link " aria-current="page" to="/login">Login page</Link>: <button onClick={signuserout} className='btn-sm btn-danger'>logout</button>}
  
  

          </header>   */}
</div>


    <ToastContainer position='top-center'/>
    <Routes>
      
         <Route exact path="/home" element={<Home/>}/>
           <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View/>} /> 
          <Route path="/about" element={<About/>} /> 

          {/* <Route exact path="/" element={<Homepage/>}/>
        <Route path="/postpage" element={<Createpost/>} />
        <Route path="/login" element={<Loginpage setIsauth={setIsauth} />} /> */}





        {/* main and important one full backed */}
        <Route exact path="/test" element={<SinglePage/>}/> 

        {/* <Route exact path="/" element={<Forgotpass/>}/> */}
  
   <Route exact path="/" element={<FirebaseApp/>}/>
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
