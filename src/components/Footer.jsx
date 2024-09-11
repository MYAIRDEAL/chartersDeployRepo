import React from "react";

import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {


    const MyAirDealHandleClick = (element) => {
        let URL = element.target.innerText;
        // Encode the address for use in a URL
        const encodedAddress = encodeURIComponent(URL);

        // Generate the URL for Google Maps
        const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;

        // Open the map in a new tab
        window.open(mapUrl);
        window.open()
    };

    const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!"

    return (
        <footer className=" py-[1rem] text-white bg-selectType ">

            <div className=" px-10" >
                <div className=" text-center py-10  ">
                    <h1 className="text-[5.5vw] font-bold tracking-[0.4rem]">
                        <a href="#navBar">
                            Book<span className="text-hoverColor">Any</span>Jet
                        </a>
                    </h1>
                </div>

                <div>
                    <div className="flex items-center flex-wrap my-10 justify-evenly gap-10">
                        <div className=" w-[20rem]">
                            <div className="flex items-center justify-start ">
                                <h1 className=" flex text-[1.4rem] font-semibold text-hoverColor">
                                    <TfiLocationPin />
                                    INDIA
                                </h1>
                            </div>
                            <div className="text-[1.2rem] hover:underline decoration-hoverColor hover:cursor-pointer" onClick={MyAirDealHandleClick}>
                                <p className="leading-7 p-2">
                                    2nd Floorr, Anjali Plaza, Jayanagar, Bangaluru, India - 560076
                                </p>
                            </div>
                            <div className="text-[1.2rem] flex  hover:underline decoration-hoverColor hover:cursor-pointer">
                                <TbBrandGmail className="m-1 text-hoverColor" />
                                <a href={EmailContent} target="_blank">
                                    support@bookmyjet.com
                                </a>
                            </div>
                        </div>

                        <div className=" w-[20rem]">
                            <div className="flex items-center justify-start ">
                                <h1 className=" flex text-[1.4rem] font-semibold text-hoverColor">
                                    <TfiLocationPin />
                                    DUBAI - UAE
                                </h1>
                            </div>
                            <div className="text-[1.2rem] hover:underline decoration-hoverColor hover:cursor-pointer" onClick={MyAirDealHandleClick}>
                                <p className="leading-7 p-2">
                                    I 10,Black 1, Phase 1, Saih Shuaib 2, Dubai, UAE.
                                </p>
                            </div>
                            <div className="text-[1.2rem] flex hover:underline decoration-hoverColor hover:cursor-pointer" >
                                <TbBrandGmail className="m-1 text-hoverColor" />
                                <a href={EmailContent} className="flex" target="_blank">
                                    support@bookmyjet.com
                                </a>
                            </div>
                        </div>

                        <div className=" flex flex-wrap">
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaTwitter />}</div>
                            <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaYoutube />}</div>
                        </div>
                    </div>

                    <div>
                        <p>©All Rights Reserved-BookAnyJet</p>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;