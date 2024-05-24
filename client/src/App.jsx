import React, { useState, useEffect } from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import Logout from "./components/Logout.jsx"
import  { AuthProvider } from "./store/Store.jsx";

import "/index.css"
import { Outlet } from 'react-router-dom';

function App() {
  const storeTokenLs = () => {

  }
  const deleteToken = () => {

  }
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState();
  
  const userContact = ()=>{
    
  }



//admin useState


//admin 




  return (

    
  <AuthProvider value={{ storeTokenLs, deleteToken, token, setToken ,userContact ,user}}>

    <Navbar />
    <Home/>
  <Outlet/>

  </AuthProvider>
  )
}



export default App;