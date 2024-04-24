import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({



  storeTokenLs: (token) => {

    localStorage.setItem("token", token)
    console.log("check localStorage");

  },


  deleteToken: () => {
    localStorage.removeItem("token");
    console.log("token removed");
  },


  userContact: async() => {
    let fetchData = await fetch("http://localhost:8000/v1/userVerify", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    })
    if (!fetchData.ok) { console.log("contact ftech error"); }
    let userData=await fetchData.json();
    console.log(userData);
  }
})

export const AuthProvider = AuthContext.Provider;


export default function useAuth() {
  return useContext(AuthContext);
}

