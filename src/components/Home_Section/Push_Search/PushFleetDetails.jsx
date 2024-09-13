
import React, { useEffect, useState } from 'react'



import { RiArmchairLine } from "react-icons/ri";
import { FaHelmetSafety } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

// import PageBanner from './PageBanner';
// import ContactUsForm from './Forms/Booking_Forms/ContactUsForm';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

function PushFleetDetails() {


    const { moredetails } = useParams();
    let briefData = {};

    const location = useLocation();
    const [navPage, setNavPage] = useState('');


    useEffect(() => {
        setNavPage(location.state?.page || 'ourfleetsdetail Error');
    }, []);

    briefData = JSON.parse(decodeURIComponent(moredetails));


    const { _id, chartertype, subCategoryName, pax, speed, price, description, image, availability, bookingtype, departure, arrival, journeytype, date, yom, seats, crew, airhosts, levatory, fromtime, endtime, flyingrange, cabinwidth, cabinheight, baggage, cabinlength, pilot, discount, discountprice, section, yor, flexibility } = briefData;
    console.log(yor)

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
            {/* <PageBanner data={'Premium High Class Fleet'} /> */}


            <div className=' pt-[2rem] ml-[2rem]'>
                <ul className='flex  text-[1.3rem] underline text-hoverColor'>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>


                    {
                        <Link to={`${navPage}`}>
                            <li>{navPage}</li>
                        </Link>
                    }

                </ul>
            </div>
            <div className=' flex items-center justify-around'>
                <div className=' gap-1 items-center justify-around flex p-4 pb-10 700:w-[50rem] 1024:w-[100rem]   flex-wrap '>
                    <div>
                        <h1>
                            {subCategoryName}
                        </h1>
                        {/* <img src={fleetsimg} alt="" className='w-[37rem] rounded-lg ' /> */}
                        <img src={image} alt="" className='1367:w-[30rem] w-[25rem] rounded-lg' />
                    </div>
                    <div className=' flex flex-col items-center  md:w-[45rem] justify-between p-7 h-auto '>




                        <div className='flex  gap-4 flex-wrap'>
                            <div className='flex gap-2 w-[13rem]'>

                                <RiArmchairLine className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Seats :
                                </h5>

                                <h4>
                                    {seats}
                                </h4>

                            </div>


                            <div className='flex gap-2 w-[13rem]'>
                                <TbBrandGithubCopilot className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Crew :
                                </h5>
                                <h4>
                                    {crew}
                                </h4>
                            </div>


                            <div className='flex gap-2 w-[13rem]'>
                                <FaBagShopping className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Baggage :
                                </h5>
                                <h4>
                                    {baggage}
                                </h4>
                            </div>

                            <div className='flex gap-2  w-[13rem]'>
                                <FaHelmetSafety className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    YOM :
                                </h5>

                                <h4>
                                    {yom}
                                </h4>

                            </div>





                            <div className='flex gap-2  w-[13rem]'>
                                <IoIosSpeedometer className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Speed :
                                </h5>
                                <h4>
                                    {speed}
                                </h4>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Flight Attendent :
                                </h5>
                                <h4>
                                    {airhosts}
                                </h4>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    YOR :
                                </h5>
                                <h4>
                                    {yor || 'NAN'}
                                </h4>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Date Flexibility :
                                </h5>
                                <h4>
                                    {flexibility || 'NAN'}
                                </h4>
                            </div>



                            <div className='flex gap-2 w-[13rem]'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Total Travel Time :
                                </h5>
                                <h4>
                                    {airhosts}
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=' bg-white flex flex-wrap py-10  flex-row shadow-xl items-center justify-around'> */}
            <div className='flex items-center flex-wrap   justify-around'>





                <div className=' w-[100%] 600:w-[30rem] p-4'>
                    <h1 className='text-[1.5rem]'>Specifications</h1>
                    <div >
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Aorcraft Type</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{chartertype}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Baggage Capacity</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{baggage}</h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Seats</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{seats}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>YOM</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{yom}</h1>
                        </div>

                        <div className='bg-hoverColor my-[1rem] h-[2.5rem] flex items-center justify-center text-[1rem] rounded-sm cursor-pointer font-bold text-gray'>
                            <Link to={`/contactus/${encodeURIComponent(JSON.stringify(briefData))}`}>
                                <button>
                                    Proceed To Book
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className=' 1024:w-[45rem] p-4'>

                    <div  >
                        <div>
                            <h1>
                                {subCategoryName}
                            </h1>
                            <h4>
                                {chartertype}
                            </h4>
                        </div>

                    </div>

                    <p >
                        {description}
                    </p>
                </div>



            </div>



        </div >
    )
}

export default PushFleetDetails
