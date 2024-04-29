import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Validate email format
        if (name === 'email' && !validateEmail(value)) {
            setError("Invalid email format.");
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Prepare payload without confirm password
        const payload = {
            companyName: formData.companyName,
            email: formData.email,
            password: formData.password
        };

        console.log(payload);

        // Reset form fields after submission
        setFormData({
            companyName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        setError('');
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Company Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 font-medium">Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
            </form>
        </div>
    );
}

export default Register;
