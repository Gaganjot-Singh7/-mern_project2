import React, { useState } from 'react'
import "../component_css/Register.css"
import {  useNavigate } from 'react-router-dom';

import {toast} from "react-toastify";

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""

  })

const navigate=useNavigate()
  //handleValue
  const handleValue = (e) => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  }


  //handle form 
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);


    try {
      let response = await fetch("http://localhost:8000/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      console.log("response of fetch is ", response.ok);
      console.log("response of fetch is ", response);
      if (response.ok) {
        
        console.log("check data base ", response);
       toast.success("Registered Sucessfully")
       navigate('/Login');

      }
      else{
        toast.error(" error !! you are already registered")
      }
    } catch (error) {
      console.log("Fetch error", error);
    }
  }


  return (
    <>
      {/* <div className="register"><h1>Register</h1></div>
      <div className="section">


        <div className="subsection1">
          <img className='image_subsection1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXW8pS5GGAmI4lfBJIt_KGOmjnADIuJQPTVRj_AA3y7tCM4F1zgfSfFNgQKT0A1VzCSRQ&usqp=CAU" alt="Register image" />
        </div>






        <div className="subsection2">
          <form onSubmit={handleForm}                                >
            <div className="subsection2_content">


              <div className="register_section">


                <div className="username">
                  <label htmlFor="Username"> Username: </label>
                  <input type="text" name="username" id="username" onChange={handleValue} />
                </div>

                <div className="Email">
                  <label htmlFor="Email">Email: </label>
                  <input type="email" name="email" id="email" onChange={handleValue} />
                </div>

                <div className="Phone">
                  <label htmlFor="Phone"> Phone: </label>
                  <input type="text" name="phone" id="phone" onChange={handleValue} />
                </div>

                <div className="Password">
                  <label htmlFor="Password"> Password: </label>
                  <input type="password" name="password" id="password" onChange={handleValue} />
                </div>



                <div className="button">
                  <button type="submit" >Register now</button>
                </div>


              </div>
            </div>
          </form>
        </div>


      </div> */}

     

<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold mb-4 text-center">Register</h1>
    <div className="flex justify-center">
      <div className="w-32 h-32">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXW8pS5GGAmI4lfBJIt_KGOmjnADIuJQPTVRj_AA3y7tCM4F1zgfSfFNgQKT0A1VzCSRQ&usqp=CAU" alt="Register image" className="rounded-full" />
      </div>
    </div>
    <div className="mt-6">
      <form onSubmit={handleForm} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="username" className="text-lg font-semibold">Username</label>
          <input type="text" name="username" id="username" onChange={handleValue} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="text-lg font-semibold">Email</label>
          <input type="email" name="email" id="email" onChange={handleValue} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="phone" className="text-lg font-semibold">Phone</label>
          <input type="text" name="phone" id="phone" onChange={handleValue} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-semibold">Password</label>
          <input type="password" name="password" id="password" onChange={handleValue} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-md hover:bg-blue-600 transition duration-300">Register now</button>
        </div>
      </form>
    </div>
  </div>
</div>




    </>
  )
}

export default Register