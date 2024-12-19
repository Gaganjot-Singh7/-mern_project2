import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
function Admin_contact() {
  const [data, setData] = useState();


  const contactFetch = async () => {

    const data = await fetch("http://localhost:8000/v2/contact", {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }

    })
    const contactList = await data.json();
    setData(contactList)
  }



const deleteMessage = async (id) => {

  const deleted=await fetch(`http://localhost:8000/v2/deleteMessage/${id}`,{
    method:"delete",
    headers:{
      Authorization:"Bearer "+ localStorage.getItem("token")
    }
  })
  console.log(deleted);
  if(!deleted.ok){
    toast.error("delete Error")
  }
  toast.success("Successflly deleted")
  contactFetch();
}



  useEffect(() => {
    contactFetch();
  }, [])

  return (

    <><p className='bg-white font-bold text-3xl  text-center my-3'>
      Message Recieved
    </p>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Remove </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data ? (
            data.map((c) => (
              <tr key={c._id}>
                <td className="px-6 py-4 whitespace-no-wrap">{c.username}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{c.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{c.message}</td>
                <td className="px-6 py-4 whitespace-no-wrap"><button className="bg-red-500 hover:bg-red-600  text-white font-bold px-4 py-2 rounded-lg" onClick={()=>{deleteMessage(c._id)}}>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap" colSpan="3">null values</td>
            </tr>
          )}
        </tbody>
      </table>


    </>
  )
}

export default Admin_contact