import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';


import AuthProvider from "./store/Store.jsx";

function App() {

  return (
    
      <AuthProvider>
        <Navbar />

        <Home />
        <About />
        <Services />
        <Contact />
        <Login />
        <Register />

        <Footer />


      </AuthProvider>



   
  )
}

export default App;