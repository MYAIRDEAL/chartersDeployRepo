import React from 'react';
import { FaSignature } from 'react-icons/fa';
import fram from '../assets/HeroBg.png';
import piolet from '../assets/F-1-1.jpg';
import { Link } from 'react-router-dom';

function AboutFlight() {
    return (
        <div id="navHerSection" className="relative  w-[98.8vw] overflow-hidden bg-fixed bg-cover bg-center py-[4rem]  bg-black" style={{ backgroundImage: `url(${fram})` }}>
            <div className="375:relative z-10 overflow-auto  md:flex  md:items-center md:justify-center  ">
                <div className="flex flex-col 500:flex-row  items-center justify-center  500:justify-around p-4 md:p-8 relative z-10">
                    {/* Info section */}


                    {/* <div className="bg-hoverColor rounded-md w-[17rem] hidden  h-[25rem]  font-semibold p-4  mb-4 md:mb-0 absolute left-[-4rem] top-[10rem]   ">

                        <div className="flex mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex  mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <FaSignature className="w-[2rem] h-[2rem]" />
                            <div className="mt-2">
                                <h1 className="text-[1.5rem]">Luxury Flight</h1>
                                <p>
                                    Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Image and text section */}
                    <div className="flex flex-col 500:flex-row w-full  700:w-[100%] 1024:w-[80%] items-center">
                        <div className="mb-4 md:mb-0">
                            <img src={piolet} alt="" className="w-full 768:w-[25rem] 500:w-[120rem] h-auto 700:h-[30rem] 700:w-[90rem] 500:h-[25rem] rounded-md" />
                        </div>
                        <div className="flex flex-col md:w-[40rem] text-white p-3">
                            <div className="m-3 text-center md:text-left">
                                <h1 className="text-hoverColor font-semibold tracking-[2px] text-[1.5rem] md:text-[2rem]">
                                    ABOUT FLIGHTS
                                </h1>
                                <h1 className="text-[1.5rem] 500:text-[3vw]">
                                    Luxury Private Jet Travel, Tailored To You.
                                </h1>
                            </div>
                            <div className="m-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi quos minus soluta quasi deleniti iure explicabo nihil recusandae sapiente voluptatibus earum expedita minima accusantium incidunt temporibus libero esse velit aliquid dolorum, perferendis iste!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ducimus!
                                </p>
                            </div>
                            <div className="m-3">
                                <Link to={'/aboutus'}>

                                    <button className="w-full md:w-[10rem] border hover:scale-105 rounded-lg transition-all duration-300 hover:bg-hoverColor hover:text-white text-hoverColor border-hoverColor h-[3em]">
                                        VIEW ABOUT
                                    </button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFlight;