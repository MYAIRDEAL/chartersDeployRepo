import React, { useEffect, useState } from 'react';
// ### Images from assets
import fram from '../../assets/fram.png';
import frameplane from '../../assets/Png-2.png';
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'


// ### Icons from react Icons
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";


// ### Import this comp Css
import '../../componentCss/HeroSectioncss.css'
import { Link } from 'react-router-dom';
import ContactUsFormMain from '../Forms/Enquiry_Forms/ContactUsFormMain';


function HeroSection() {

    const customerExperience = [
        { name: 'Charter', img: frameplane },
        { name: 'Helicopter', img: img2 },
        { name: 'Air Ambulance', img: img3 },

    ];
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % customerExperience?.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [customerExperience?.length]);

    return (
        <div>




            <div>
                <div className="relative w-full md:h-[90vh] h-[50vh]  overflow-hidden rounded-lg">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {
                            customerExperience?.length > 0 ? customerExperience.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <div className='text-white md:h-[89.6vh] flex flex-col md:flex-row md:justify-around'>
                                        {/* Social Media Icons */}
                                        <div className='md:flex hidden flex-col items-center md:items-start md:justify-center mb-4 md:mb-0'>
                                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>


                                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<RiTwitterXLine />}</div>


                                            <Link to={'https://www.linkedin.com/company/my-air-deal/mycompany/'} target='_blank' >
                                                <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaLinkedin />}</div>
                                            </Link>

                                        </div>
                                        {/* Image Section */}
                                        <div className='relative w-full max-w-[40rem] md:flex hidden mb-4 md:mb-0 animationContainer'>
                                            <img src={fram} alt="Frame" className='w-[70vh] absolute inset-0  m-auto customAnimation' />
                                            <img src={slide.img} alt="Frameplane" className='w-[70vh] absolute inset-0 m-auto customAnimation' />
                                        </div>
                                        {/* Text Content */}
                                        <div className='flex flex-col w-full max-w-[100%] md:max-w-[35%] items-start md:items-start justify-center text-center md:text-left'>
                                            {/* <div className='m-4'>
                                                <span className='text-hoverColor text-xl block md:inline'>Welcome </span>
                                                to Flights
                                            </div> */}
                                            <div className='text-[4vw] m-4 mt-10'>
                                                <h1 className='leading-none transition-all duration-700'>
                                                    Private <span className='text-hoverColor transition-all duration-700 ease-in-out'> {slide.name} </span> with Global Coverage
                                                </h1>
                                            </div>
                                            <div className='m-4'>
                                                <p className='text-sm  md:text-base'>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam laborum ipsum aspernatur ducimus, deserunt, mollitia natus similique minima ab quas expedita in quo vitae ipsa maiores recusandae accusamus doloremque corporis molestias eos unde!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                                :

                                'Welcom to Book Any Jet'
                        }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HeroSection;
