import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
function AdminServices() {

    const [currentServices, setCurrentServices] = useState()






    const getServices = async () => {
        const services = await fetch("http://localhost:8000/v2/services", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        let data = await services.json()
        if (!data) {
            toast.error("getService jsx");
            console.log("erorr jsx", data);
        }
        else {
            setCurrentServices(data);
            console.log(data);
            console.log(currentServices);
            toast.success("got values of services jsx");

        }
    }


    const deleteService = async(id) => {
        const deleteData = await fetch(`http://localhost:8000/v2/deleteService/${id}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        console.log(deleteData);
        if (deleteData.ok) {
            toast.success("service deleted successfully")
            getServices();
        } else {
            toast.error("ERROr in delete")
        }
    }



    useEffect(() => {
        getServices()
    }, [])


    return (
        <>

            <h1 className="text-3xl font-bold mb-4 bg-white">Current services</h1>

            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>

                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Remove</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentServices ? (
                        currentServices.map((c) => (
                            <tr key={c._id}>
                                <td className="px-6 py-4 whitespace-no-wrap">{c.title}</td>
                                <td className="px-6 py-4 whitespace-no-wrap">{c.description}</td>
                                <td className="px-6 py-4 whitespace-no-wrap">{c.price}</td>
                                
                                <td className="px-6 py-4 whitespace-no-wrap"><button className='bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg py-2 px-4 ' onClick={() => { deleteService(c._id) }}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap" colSpan="3">Null</td>
                        </tr>
                    )}
                </tbody>
            </table>




        </>
    )
}

export default AdminServices;