import React, { useState } from 'react';
function CompLogin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Company Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                    <input type="email" id="email" name="email" value={data.email} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                    <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
            </form>
        </div>
    )
}

export default CompLogin