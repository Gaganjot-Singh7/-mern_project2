import React, { useEffect, useState } from 'react'
import useAuth from '../store/Store.jsx';
import { useNavigate } from 'react-router-dom';

function Logout() {


  const { deleteToken } = useAuth()
  const navigate = useNavigate()


  const [isToken, setIsToken] = useState(localStorage.getItem("token"))

  useEffect(() => {

    if (isToken) {
      deleteToken();
     
      setIsToken("");
    }
    else { navigate("/") }
  }, [isToken])
  return (
    <>
        


    </>
  )
}

export default Logout