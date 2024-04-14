import React, { useState } from 'react'
import "../component_css/Register.css"
import { NavLink } from 'react-router-dom';



function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""

  })


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
      const response = await fetch("http://localhost:8000/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      console.log("response of fetch is ", response);
      if (response.ok) {
        const response = response.json();
        console.log("check data base ", response.jwtTokwn);
        setTokeninls(response.jwtTokwn)
        useNavigate('/Login');

      }
    } catch (error) {
      console.log("Fetch error", error);
    }
  }


  return (
    <>
      <div className="register"><h1>Register</h1></div>
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


      </div>

      <NavLink to="/">Home Page</NavLink>

    </>
  )
}

export default Register