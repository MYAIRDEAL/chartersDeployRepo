import React from 'react'

import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

import ContactUsForm from './ContactUsForm';
import { useParams } from 'react-router-dom';
import PageBanner from '../../PageBanner';

function ContactUs() {
    let decodedBookingData = null;
    let { detailsofbooking } = useParams()
    try {
        decodedBookingData = JSON.parse(decodeURIComponent(detailsofbooking))
    }
    catch (error) {
        console.log(error)
    }

    return (

        <div className='w-full   flex flex-col  bg-white'>



            <PageBanner data={'Contact Us'} />

            <div className='flex md:mt-[5rem] flex-wrap py-[5rem]  items-center justify-center'>
                <div className=' w-[35rem] flex flex-col items-center justify-center  px-5 '>
                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Phone Number</h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem] items-center '>
                            <LuPhoneCall className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                123-234-11234
                            </h1>
                        </div>
                    </div>

                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Email Address</h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem] items-center'>
                            <CgMail className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                hello@awesome.com
                            </h1>
                        </div>
                    </div>

                    <div className='my-5'>
                        <h1 className='text-hoverColor text-[1.5rem]' >Address</h1>
                        <p className='text-[1.1rem] text-gray-400 '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className='flex text-[1.5rem]  items-center'>
                            <FaLocationDot className='text-hoverColor mx-3' />
                            <h1 className='text-[1.1rem] md:text-[1.5rem] '>
                                99 Roving St., Big City, PKU 23456
                            </h1>
                        </div>
                    </div>


                </div>


                <ContactUsForm props={decodedBookingData} />

            </div>

        </div>

    )
}

export default ContactUs