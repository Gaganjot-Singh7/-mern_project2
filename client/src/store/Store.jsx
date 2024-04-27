import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
export const AuthContext = createContext({



  storeTokenLs: (token) => {

    localStorage.setItem("token", token)
    console.log("check localStorage");

  },


  deleteToken: () => {
    localStorage.removeItem("token");
    console.log("token removed");
  },


  userContact: async () => {

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
  },

    

   

})

export const AuthProvider = AuthContext.Provider;


export default function useAuth() {
  return useContext(AuthContext);
}

