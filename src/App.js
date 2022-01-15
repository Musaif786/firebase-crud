import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AddEdit from './components/AddEdit';
import View from './components/View';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { useHistory } from "react-router-dom";
  



function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header/>
    <ToastContainer position='top-center'/>
    <Routes>
      
          <Route exact path="/" element={<Home/>}/>
           <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View/>} /> 
          <Route path="/about" element={<About/>} />
        
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
