import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { toast } from "react-toastify"

function Admin_user() {
    const [admindata, setAdmindata] = useState([]);


    const fetchAdmin = async () => {
        try {
            const response = await fetch("http://localhost:8000/v2/user", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token") // Corrected spelling
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();
            setAdmindata(data);
            console.log("fetch data", admindata);
            toast.success("Admin welcome");
        } catch (error) {
            console.error("Error fetching user data:", error);
            toast.error("Acess denied");
        }
    }





    //button delete  in user
    const userDelete = async (id) => {
        try {
            const fetcher = await fetch(`http://localhost:8000/v2/delete/${id}`,{
                method: "DELETE",
                headers:{
                    Authorization:'Bearer ' + localStorage.getItem("token")
                }
            })
            if (!fetcher.ok) {
                throw new Error("Failed to delete data");
            }
            fetchAdmin()
           console.log("deleted");
        } catch (error) {
            toast.error("Delete, Error!")
        }
    }


    useEffect(() => {

        fetchAdmin();
    }, []);

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5' >Admin User</h2>

            {admindata ? (

                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Id</th>
                            <th className="border border-gray-400 px-4 py-2">Username</th>
                            <th className="border border-gray-400 px-4 py-2">Email</th>
                            <th className="border border-gray-400 px-4 py-2">Phone</th>
                            <th className="border border-gray-400 px-4 py-2">Is Admin</th>

                            <th className="border border-gray-400 px-4 py-2">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admindata.map((data) => (
                            <tr key={data._id}>
                                <td className="border border-gray-400 px-4 py-2">{data._id}</td>
                                <td className="border border-gray-400 px-4 py-2">{data.username}</td>
                                <td className="border border-gray-400 px-4 py-2">{data.email}</td>
                                <td className="border border-gray-400 px-4 py-2">{data.phone}</td>
                                <td className="border border-gray-400 px-4 py-2">{data.isAdmin ? 'Yes' : 'No'}</td>
                                
                                <td className="border border-gray-400 px-4 py-2">{data.isAdmin?<p className='text-red-500 text-2xl font-bold text-center'>X</p>:(<button className="bg-red-500 text-white rounded-full px-4 py-2 text-center" onClick={()=>userDelete(data._id)}>Delete</button>)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>



            ) : (err)}

        </div>
    );
}

export default Admin_user;
