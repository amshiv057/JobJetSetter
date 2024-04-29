import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-8 mt-5">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Twitter</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Instagram</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Careers</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Job Openings</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Internships</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Employee Benefits</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Apply Now</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Our Team</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Company History</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Mission & Vision</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">123 Main Street</li>
            <li className="mb-2">City, State, Zip</li>
            <li className="mb-2">Email: info@example.com</li>
            <li className="mb-2">Phone: 123-456-7890</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
