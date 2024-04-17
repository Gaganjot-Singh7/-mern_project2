import React, { createContext,useState } from 'react'


export const AuthContext=createContext("");


export default  function AuthProvider({Children}) {
  //hook
  const [token,setToken]=useState(null)

  //funtionsetup for login
const storeToken=(value_token)=>{
  localStorage.setItem("token",value_token);
}
  return (
   <AuthContext.Provider value={{token,setToken,storeToken}}>
    {Children}
   </AuthContext.Provider>
  )
}



