import React from 'react'

function postJob() {
    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Post Job Opening</h2>
            <form onSubmit={"handleSubmit"}>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 font-medium">Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={"formData.companyName"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="linkedIn" className="block text-gray-700 font-medium">Company's LinkedIn</label>
                    <input type="link" id="linkedIn" name="linkedIn" value={"formData.linkedIn"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium">Job Title</label>
                    <input type="text" id="title" name="title" value={"formData.title"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="openings" className="block text-gray-700 font-medium">Openings</label>
                    <input type="text" id="openings" name="Openings" value={"formData.openings"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="Salary" className="block text-gray-700 font-medium">Salary</label>
                    <input type="text" id="salary" name="salary" value={"formData.salary"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
                    <textarea type="text" id="description" name="description" value={"formData.description"} onChange={"handleChange"} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Post Job</button>
            </form>
        </div>
    )
}

export default postJob