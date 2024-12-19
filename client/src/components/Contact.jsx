import React, {  useState,useEffect } from 'react'
import "../component_css/Contact.css";
import { NavLink } from "react-router-dom";
import useAuth from '../store/Store';
import { toast } from 'react-toastify';


function Contact() {
  
  
 const {user,userContact}= useAuth();
 
 useEffect(()=>{
  userContact();
  // console.log(("value of user is",user));
  },[])

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  })

  const handleValue = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    })

  }

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(contact);


    const response = await fetch("http://localhost:8000/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    });
    console.log(response);
    if (response.ok) { console.log("check  Contact database"); 
  toast.success("Message submitted")
  }

  }


  return (
    <>
      <div className="contact">
        <h1 className='text-3xl font-bold my-3  bg-black p-5 my-10'>Contact Us</h1></div>
      <section className='contact_section bg-white flex'>


        <div className="contact_subsection1 w-1/2 h-3/4   my-auto">
          {/* <img src="data:image/png;base64,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" alt="" /> */}
<img  className=' rounded-lg' src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
        </div>
        <div className="contact_subsection2 w-1/2 border-2 border-blue-400 flex justify-center items-center">
          <div className="contact_content_subsection2  h-3/4">

            <form onSubmit={handleForm}>
              <label htmlFor="username" className='mx-5'>Username</label>
              
              <input className='m-5 border-2 border-blue-300' type="text" name="username" id="username" onChange={handleValue} />
              <br />

              <label htmlFor="email" className='mx-5'>Email</label>
              <input className='m-5 border-2 border-blue-300' type="text" name="email" id="email" onChange={handleValue} />
              <br />
              <label htmlFor="message" className='mx-5'>Message</label>
              <input className='m-5 border-2 border-blue-300' type="text" name="message" id="message" onChange={handleValue} /><br />
              <br />
              <button type="submit" className='mx-5  items-center bg-blue-600 hover:bg-blue-800 px-10 py-4 rounded-xl'>Send</button>


            </form>



          </div>
        </div>

       

      </section>


    </>)
}

export default Contact;