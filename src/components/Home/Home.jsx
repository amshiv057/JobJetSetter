import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/Images/logo2.jpg";
import logo2 from "../../assets/Images/logo3.jpg";
import amazon from "../../assets/Images/amazon.png";
import flipkart from "../../assets/Images/flipkart.png";
import netflix from "../../assets/Images/netflix.png";
import google from "../../assets/Images/google.png";
import mpl from "../../assets/Images/mpl.png";
import microsoft from "../../assets/Images/microsoft.png";
import linkedIn from "../../assets/Images/linkedIn.png";
import hexaware from "../../assets/Images/hexaware.png";
import hcl from "../../assets/Images/hcl.png";
import "./home.css";

function Home() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImages([amazon, flipkart, google, mpl, netflix, hcl, hexaware, linkedIn, microsoft]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-8 z-10 md:mt-60px p-6 sm:p-4 md:p-0 self-start w-full mt-20">
                <div className="md:w-1/2">
                    <div className="text-dark text-4xl md:text-5xl font-extrabold md:leading-64px md:min-w-600px leading-10 text-center md:text-left">Take your job profile to JobjetSetter</div>
                    <div className="text-[#505B66] text-lg md:text-xl font-semibold md:leading-8 md:min-w-600px leading-4 text-center md:text-left mt-3">Boost your job profile with Kudos from your peers for your skills and traits. Land your dream job effortlessly. Our AI matches you with the perfect opportunity.</div>
                    <button className="text-white bg-blue-500 text-lg md:text-xl font-extrabold leading-6 self-center md:self-start py-2 px-6 rounded-md mt-8 md:mt-0 mt-2">Sign up for free</button>
                </div>
                <div className="flex gap-2 items-center mb-10 md:w-1/2">
                    <div className="css-1f092ge">
                        <img alt="" loading="lazy" width="300" height="400" decoding="async" src={logo1} />
                    </div>
                    <div>
                        <img alt="" loading="lazy" width="300" height="400" decoding="async" src={logo2} />
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-white'>Companies that hire on JotJetSetter</p>
                <div className="carousel-container">
                    <div className="carousel">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" className={index === currentIndex ? 'active' : ''} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
