import React, { useState } from 'react';

import { toast } from 'react-toastify';
const MyForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit =async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);

        const data = await fetch("http://localhost:8000/v2/addservices", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization:"Bearer "+ localStorage.getItem("token")
            },
            body: JSON.stringify(formData)
        }


        )

        console.log("after new add service",data);
        if(!data.ok){
            
            toast.error("new service not added");
        }
        else{
            toast.success("new service added");
           setFormData("")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Add New Service</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter description"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyForm;
