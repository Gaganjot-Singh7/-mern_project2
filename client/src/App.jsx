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

function App() {
  const storeTokenLs = () => {

  }
  const deleteToken = () => {

  }
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState();

  const userContact = async () => {

    let fetchData = await fetch("http://localhost:8000/v1/userVerify", {
      method: "get",
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    })
    console.log("data of contact ",fetchData);
    if (!fetchData.ok) { console.log("Fetch data error in Contact"); }
    let userData=await fetchData.json();
    console.log(userData);
    
    setUser(userData);
  }





  return (

    
  <AuthProvider value={{ storeTokenLs, deleteToken, token, setToken ,userContact ,user}}>

    <Navbar />
    <Home />
    <About />
    <Services />
    <Contact />
    
    <Footer />

  </AuthProvider>
  )
}



export default App;