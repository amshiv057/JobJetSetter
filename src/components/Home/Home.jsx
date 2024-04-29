import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from "../../assets/Images/logo2.jpg";
import logo2 from "../../assets/Images/logo3.jpg";
import "./home.css";

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-8 z-10 md:mt-60px p-6 sm:p-4 md:p-0 self-start w-full mt-20">
                <div className="md:w-1/2">
                    <div className="text-dark text-4xl md:text-5xl font-extrabold md:leading-64px md:min-w-600px leading-10 text-center md:text-left">Take your job profile to JobjetSetter</div>
                    <div className="text-[#505B66] text-lg md:text-xl font-semibold md:leading-8 md:min-w-600px leading-4 text-center md:text-left mt-3">Boost your job profile with Kudos from your peers for your skills and traits. Land your dream job effortlessly. Our AI matches you with the perfect opportunity.</div>
                    <button className="text-white bg-blue-500 text-lg md:text-xl font-extrabold leading-6 self-center md:self-start py-2 px-6 rounded-md mt-8 md:mt-0 mt-2">Sign up for free</button>
                </div>
                <div className="flex gap-2 items-center mb-10 md:w-1/2">
                    <div>
                        <img alt="" src={logo1} className="logo-image" />
                    </div>
                    <div>
                        <img alt="" src={logo2} className="logo-image" />
                    </div>
                </div>

            </div>
            <div className="slider-container">

                <h2 className='my-2'>COMPANIES HIRING ON PLATFORM</h2>

                <Slider {...settings}>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F1.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F2.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F3.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F4.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F5.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F6.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="slider-image" src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fassets%2Ftop-companies%2F7.png&w=640&q=75" alt="" />
                    </div>
                </Slider>
            </div>
            <div className="flex flex-wrap items-center my-5 border-black my-5">
                <div className="w-full md:w-1/2 px-4"> 
                    <div className="flex flex-col self-start">
                        <p className="text-blue text-base font-extrabold leading-6 uppercase tracking-[.64px]">Rich profiles</p>
                        <p className="text-dark text-[40px] font-bold leading-[48px] mt-4">Build a profile that stands out</p>
                        <p className="text-[#505B66] text-xl leading-8 font-semibold mt-6">Make a strong first impression in front of potential employers and set the stage for your next career move.</p>
                        <button className="mt-8 hidden md:flex h-[56px] w-fit p-4 pl-5 gap-2 rounded-xl text-lg font-extrabold leading-6 bg-dark text-white">
                            <p>Build your profile</p>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12h16M14 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0" >
                    <img src='https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fstatic%2Fcandidate_landing_why_step_one.png&w=1200&q=75' alt="Additional content image" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row-reverse items-center my-5">
                <div class="w-full md:w-1/2 px-4">
                    <div class="flex flex-col self-start">
                        <p class="text-blue text-base font-extrabold leading-6 uppercase tracking-[.64px]">Explore jobs</p>
                        <p class="text-dark text-[40px] font-bold leading-[48px] mt-4">Diverse opportunities at your fingertips</p>
                        <p class="text-[#505B66] text-xl leading-8 font-semibold mt-6">Explore a wide range of job types across industries. Find your fit in a place where your passion meets your profession.</p>
                        <button class="mt-8 hidden md:flex h-[56px] w-fit p-4 pl-5 gap-2 rounded-xl text-lg font-extrabold leading-6 bg-dark text-white">
                            <p>Apply for jobs</p>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12h16M14 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                    <img src='https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fstatic%2Fcandidate_landing_why_step_two.png&w=1200&q=75' alt="Additional content image" />
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                    <div class="flex flex-col self-start">
                        <p class="text-blue text-base font-extrabold leading-6 uppercase tracking-[.64px]">Take AI interviews</p>
                        <p class="text-dark text-[40px] font-bold leading-[48px] mt-4">Boost your application through video interviews</p>
                        <p class="text-[#505B66] text-xl leading-8 font-semibold mt-6">Impress recruiters by showcasing your skills through AI-powered video interviews and elevate your profile above the competition.</p>
                        <button class="mt-8 hidden md:flex h-[56px] w-fit p-4 pl-5 gap-2 rounded-xl text-lg font-extrabold leading-6 bg-dark text-white">
                            <p>Take interviews</p>
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12h16M14 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <img src='https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fstatic%2Fcandidate_landing_why_step_three.png&w=1200&q=75' alt="Additional content image" />
                </div>
            </div>

        </div>
    );
}

export default Home;
