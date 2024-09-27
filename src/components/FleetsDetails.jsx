import React, { useEffect, useState } from 'react'


import { RiArmchairLine } from "react-icons/ri";
import { FaHelmetSafety } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

import PageBanner from './PageBanner';
import ContactUsForm from './Forms/Booking_Forms/ContactUsForm';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import EnquiryPopUp from './EnquiryPopUp';


function FleetsDetails({ temp, setTemp }) {



    const { moredetails } = useParams();
    let briefData = {};

    const location = useLocation();
    const [navPage, setNavPage] = useState('');



    useEffect(() => {
        setNavPage(location.state.page);
    }, []);





    briefData = JSON.parse(decodeURIComponent(moredetails));




    const { _id, chartertype, subCategoryName, pax, speed, price, description, image, availability, bookingtype, departure, arrival, journeytype, date, yom, seats, crew, airhosts, lavatory, fromtime, endtime, flyingrange, cabinwidth, cabinheight, baggage, cabinlength, pilot, discount, discountprice, section } = briefData;

    let navData = {
        arrival,
        date,
        departure,
        pax,
        section
    }

    let encodeNavData = (encodeURIComponent(JSON.stringify(navData)))

    return (
        <div className='bg-white'>

            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>

            <PageBanner data={subCategoryName?.length == 0 || subCategoryName == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : subCategoryName} image={image} />


            <div className=' mt-[2rem] ml-[2rem]'>
                <ul className='flex  text-[1.3rem] underline text-hoverColor'>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>

                    {
                        navPage == 'subcategory' ? <Link to={`/${navPage}/${encodeNavData}`}>
                            <li>/ {chartertype}</li>
                        </Link> : <Link to={`/${navPage}/${chartertype}`}>
                            <li>{navPage}</li>
                        </Link>
                    }

                </ul>
            </div>
            <div className=' flex items-center justify-around'>
                <div className=' gap-1 items-center justify-around flex p-4 pb-10 700:w-[50rem] 1024:w-[100rem]   flex-wrap '>
                    <div>
                        {/* <img src={fleetsimg} alt="" className='w-[37rem] rounded-lg ' /> */}
                        <img src={image} alt="" className='w-[30rem] rounded-lg' />
                    </div>
                    <div className=' flex flex-col justify-around md:h-[30rem] md:w-[110vh] md:p-[3rem]'>
                        <div >
                            <div>
                                <h1>
                                    {subCategoryName?.length == 0 || subCategoryName == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : subCategoryName}
                                </h1>
                                <h4>
                                    {chartertype?.length == 0 || chartertype == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : chartertype}
                                    {/* {chartertype} */}
                                </h4>
                            </div>
                            <div>
                                <p>
                                    {description?.length == 0 || description == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : description}
                                    {/* {description} */}
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-wrap'>
                            <div className='flex gap-2 w-[15rem] items-center'>

                                <RiArmchairLine className='w-[1.5rem] h-[1.5rem]' />

                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {seats?.length == 0 || seats == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : seats}
                                        {/* {seats} */}
                                    </h4>
                                </div>

                            </div>

                            <div className='flex gap-2 w-[15rem] items-center'>
                                <FaHelmetSafety className='w-[1.5rem] h-[1.5rem]' />

                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {yom?.length == 0 || yom == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : yom}
                                        {/* {yom} */}
                                    </h4>
                                </div>



                            </div>


                            <div className='flex gap-2 w-[15rem] items-center'>
                                <TbBrandGithubCopilot className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {crew?.length == 0 || crew == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : crew}
                                        {/* {crew} */}
                                    </h4>
                                </div>

                            </div>
                            <div className='flex gap-2 w-[15rem] items-center'>
                                <FaBagShopping className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {baggage?.length == 0 || baggage == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : baggage}
                                        {/* {baggage} */}
                                    </h4>
                                </div>

                            </div>

                            <div className='flex gap-2 w-[15rem] items-center'>
                                <IoIosSpeedometer className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {speed?.length == 0 || speed == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : speed}
                                        {/* {speed}  */}
                                    </h4>
                                </div>

                            </div>

                            <div className='flex gap-2 w-[15rem] items-center'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex items-center justify-center pt-2'>
                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {airhosts?.length == 0 || airhosts == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : airhosts}
                                        {/* {airhosts} */}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white flex flex-wrap py-10  shadow-xl items-center justify-around'>
                <div className=' w-[100%] md:w-[35rem] p-4'>
                    <h1 className='text-[1.5rem]'>Specifications</h1>
                    <div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Aircraft Type</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {chartertype?.length == 0 || chartertype == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : chartertype}
                                {/* {chartertype} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Baggage Capacity</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {baggage?.length == 0 || baggage == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : baggage + 'kg'}
                                {/* {baggage}  */}

                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cruise Speed</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {speed?.length == 0 || speed == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : speed + 'nm'}
                                {/* {speed} nm  */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Seats</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {seats?.length == 0 || seats == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : seats}
                                {/* {seats} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>YOM</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {yom?.length == 0 || yom == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : yom}
                                {/* {yom} */}
                            </h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Pilots</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {pilot?.length == 0 || pilot == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : pilot}
                                {/* {pilot} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Crew</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {crew?.length == 0 || crew == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : crew}
                                {/* {crew} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Flying Range</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {flyingrange?.length == 0 || flyingrange == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : flyingrange}
                                {/* {flyingrange} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Height</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {cabinheight?.length == 0 || cabinheight == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : cabinheight}
                                {/* {cabinheight} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Width</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {cabinwidth?.length == 0 || cabinwidth == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : cabinwidth}
                                {/* {cabinwidth} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {cabinlength?.length == 0 || cabinlength == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : cabinlength}
                                {/* {cabinlength} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Lavatory</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {lavatory?.length == 0 || lavatory == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : lavatory}
                                {/* {levatory} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Price ( 1 Hr )</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>
                                {price?.length == 0 || price == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : '$' + price}
                                {/* {price} */}
                            </h1>
                        </div>
                    </div>
                </div>



                <ContactUsForm props={briefData} />


            </div>



        </div >
    )
}

export default FleetsDetails