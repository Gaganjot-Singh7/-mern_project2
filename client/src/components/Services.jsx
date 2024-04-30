import React, { useEffect, useState } from 'react'

import "../component_css/Services.css"


function Card({ id,title, description, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4" key={id}>
        <p className="mt-2 text-gray-800 font-bold">Price :{price}</p>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}




function Services() {
  const [user, setUser] = useState({})

  const dataFetch = async () => {
    const data = await fetch("http://localhost:8000/v1/services", { method: "GET" })
    let response = await data.json()

    if (response) {
      let arrayValue = response.msg;
      setUser(arrayValue)
      console.log("USeState check", user);
    } else {
      console.log(" front fetching error");
    }
  };
  useEffect(() => {
    dataFetch()
  }, [])



  return (
    <>





      <div className="grid grid-cols-3 gap-4">
      {user.length > 0 ? (
          user.map((service) => (
            
            <Card 
            id={service.id} 
            title={service.title} 
            description={service.description} 
            price={service.price} 
          />
          
          ))
        ) : (
          <p>No services available</p>
        )}

        </div>

       




    </>
  )
}

export default Services