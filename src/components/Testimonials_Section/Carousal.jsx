import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { message } from 'antd';
import axios from 'axios';
import '../../componentCss/Carousalcss.css'



function Carousal() {
  const [customerExperience, setCustomerExperience] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
        const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallfeedback');
        setCustomerExperience(response.data.feedback);
      } catch (error) {
        // Handle this error in Silently
      }
    };
    fetchExperience();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % customerExperience?.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [customerExperience?.length]);

 

  return (
    <div >
      <div className="relative 900:w-[55vw]  w-[92vw] max-w-[1200px]  h-auto overflow-hidden rounded-lg">
        <div className="relative w-full min-h-[65vh] 400:min-h-[60vh] 700:min-h-[60vh] 800:h-[40vh] 900:min-h-[70vh] 1000:min-h-[70vh]  py-10 flex items-center justify-center" id='carousalText'>
          {customerExperience.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 py-4 flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="md:w-[45rem] flex flex-col justify-between">
                <p className="text-[1.1rem] leading-7 text-gray-400 overflow-hidden px-2 py-10">
                  {slide.feedback.slice(0,350) + '...'}
                </p>
                {/* <RiDoubleQuotesR className="absolute w-[5rem] h-[5rem] z-5 top-6 left-1 text-hoverColor hidden md:flex" /> */}
                <div className="flex pb-7">
                  <div className=" text-white  flex justify-center p-1 text-[1.6rem] h-[2.5rem] w-[2.5rem] rounded-full bg-hoverColor">
                    <h1 > {slide.name.slice(0,2)} </h1>
                  </div>
                  <div className="ml-5 text-white">
                    <h1>{slide.name}</h1>
                    <h1 className="text-hoverColor">{slide.service}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
