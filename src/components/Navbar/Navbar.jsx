import React, { useState } from 'react';
import logo from "../../assets/Images/logo1.png";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
const handleNavigate =()=>{
      navigate("/")
}
  return (
    <nav className="nav-bar bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-16" src={logo}  alt="Logo" onClick={handleNavigate} style={{cursor:"pointer"}} />
          </div>
          <div className="hidden md:flex md:items-center md:ml-6">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">For Recruiters</a>
            <div className="flex-grow"></div>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">Login</button>
              <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">For Recruiters</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">Login</button>
              <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
