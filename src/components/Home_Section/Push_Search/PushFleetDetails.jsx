
import React, { useEffect, useState } from 'react'






import Clock from '../../../assets/PushSearch/Clock.svg'
import Team from '../../../assets/PushSearch/Team.svg'
import Transfer from '../../../assets/PushSearch/Transfer.svg'
import Sailor from '../../../assets/PushSearch/Sailor.svg'
import Speed from '../../../assets/PushSearch/Speed.svg'
import Safe_flight from '../../../assets/PushSearch/Safe_flight.svg'
import Suitcases from '../../../assets/PushSearch/Suitcases.svg'
import Group from '../../../assets/PushSearch/Group.svg'
import Seat from '../../../assets/PushSearch/Seat.svg'

// import PageBanner from './PageBanner';
// import ContactUsForm from './Forms/Booking_Forms/ContactUsForm';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import EnquiryPopUp from '../../EnquiryPopUp'

function PushFleetDetails({ temp, setTemp }) {


    const { moredetails } = useParams();
    let briefData = {};

    const location = useLocation();
    const [navPage, setNavPage] = useState('');


    useEffect(() => {
        setNavPage(location.state?.page || 'ourfleetsdetail Error');
    }, []);

    briefData = JSON.parse(decodeURIComponent(moredetails));


    const { _id, chartertype, subCategoryName, pax, speed, price, description, image, availability, bookingtype, departure, arrival, journeytype, date, yom, seats, crew, airhosts, lavatory, fromtime, endtime, flyingrange, cabinwidth, cabinheight, baggage, cabinlength, pilot, discount, discountprice, section, yor, flexibility } = briefData;

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

            {/* <PageBanner data={'Premium High Class Fleet'} /> */}


            <div className=' pt-[2rem] ml-[2rem]'>
                <ul className='flex  text-[1.3rem] underline text-hoverColor'>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>


                    {
                        <Link to={`${navPage}`}>
                            <li>/ {navPage}</li>
                        </Link>
                    }

                </ul>
            </div>
            <div className=' flex items-center justify-around'>
                <div className=' gap-1 items-center justify-around flex p-4 pb-10 700:w-[50rem] 1024:w-[100rem]   flex-wrap '>
                    <div>
                        <h1>
                            {/* {subCategoryName} */}
                            {subCategoryName?.length == 0 || subCategoryName == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : subCategoryName}
                        </h1>
                        {/* <img src={fleetsimg} alt="" className='w-[37rem] rounded-lg ' /> */}
                        <img src={image} alt="" className='1367:w-[30rem] w-[25rem]  rounded-lg' />
                    </div>
                    <div className=' flex flex-col bg-green-500 items-center  md:w-[45rem] justify-between p-7 h-auto '>




                        <div className='flex  gap-4 flex-wrap'>
                            <div className='flex gap-2 w-[13rem] items-center'>
                                <img src={Seat} alt="" className='w-[1.5rem] h-[1.5rem] ' />
                                {/* <RiArmchairLine className='w-[1.5rem] h-[1.5rem]' /> */}
                                <div className='flex mt-2'>
                                    <h5>
                                        Seats :
                                    </h5>

                                    <h4>
                                        {/* {seats} */}
                                        {seats?.length == 0 || seats == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : seats}
                                    </h4>
                                </div>

                            </div>


                            <div className='flex gap-2 w-[13rem]'>
                                <img src={Group} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                {/* <TbBrandGithubCopilot className='w-[1.5rem] h-[1.5rem]' /> */}
                                <div className='flex mt-1'>
                                    <h5>
                                        Crew :
                                    </h5>
                                    <h4>
                                        {/* {crew} */}
                                        {crew?.length == 0 || crew == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : crew}
                                    </h4>
                                </div>
                            </div>


                            <div className='flex gap-2 w-[13rem]'>
                                {/* <FaBagShopping className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Suitcases} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex mt-1'>

                                    <h5>
                                        Baggage :
                                    </h5>
                                    <h4>
                                        {/* {baggage} */}
                                        {baggage?.length == 0 || baggage == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : baggage}
                                    </h4>
                                </div>
                            </div>

                            <div className='flex gap-2  w-[13rem]'>
                                {/* <FaHelmetSafety className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Safe_flight} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex  mt-1'>

                                    <h5>
                                        YOM :
                                    </h5>

                                    <h4>
                                        {/* {yom} */}
                                        {yom?.length == 0 || yom == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : yom}
                                    </h4>
                                </div>

                            </div>





                            <div className='flex gap-2  w-[13rem]'>
                                {/* <IoIosSpeedometer className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Speed} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex  mt-1'>

                                    <h5>
                                        Speed :
                                    </h5>
                                    <h4>
                                        {/* {speed} */}
                                        {speed?.length == 0 || speed == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : speed}
                                    </h4>
                                </div>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                {/* <IoIosPeople className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Sailor} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex  mt-1'>

                                    <h5>
                                        Flight Attendent :
                                    </h5>
                                    <h4>
                                        {/* {airhosts} */}
                                        {airhosts?.length == 0 || airhosts == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : airhosts}
                                    </h4>
                                </div>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                {/* <IoIosPeople className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Transfer} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    YOR :
                                </h5>
                                <h4>
                                    {/* {yor || 'NAN'} */}
                                    {yor?.length == 0 || yor == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : yor}
                                </h4>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                {/* <IoIosPeople className='w-[1.5rem] h-[1.5rem]' /> */}
                                <img src={Team} alt="" className='w-[1.5rem] h-[1.5rem]' />
                                <div className='flex  mt-1'>

                                    <h5>
                                        Date Flexibility :
                                    </h5>
                                    <h4>
                                        {/* {flexibility || 'NAN'} */}
                                        {flexibility?.length == 0 || flexibility == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : flexibility}
                                    </h4>
                                </div>
                            </div>



                            <div className='flex gap-2 w-[13rem]'>
                                <img src={Clock} alt="" className='w-[1.5rem] h-[1.5rem]' />

                                <div className='flex bg-red-500   mt-1'>


                                    <h5>
                                        Total Travel Time :
                                    </h5>
                                    <h4>
                                        {/* {airhosts} */}
                                        {airhosts?.length == 0 || airhosts == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : airhosts}
                                    </h4>
                                </div>
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
                            <h1 className='p-2 bg-gray-400 w-[40%] h-[2rem] m-[0.1rem]'>Aorcraft Type</h1>
                            <h1 className='p-2 bg-gray-200 w-[60%] h-[2rem] m-[0.1rem]'>
                                {/* {chartertype} */}

                                {chartertype?.length == 0 || chartertype == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : chartertype}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[40%] h-[2rem] m-[0.1rem]'>Baggage Capacity</h1>
                            <h1 className='p-2 bg-gray-200 w-[60%] h-[2rem] m-[0.1rem]'>
                                {baggage?.length == 0 || baggage == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : baggage}
                                {/* {baggage} */}
                            </h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[40%] h-[2rem] m-[0.1rem]'>Seats</h1>
                            <h1 className='p-2 bg-gray-200 w-[60%] h-[2rem] m-[0.1rem]'>
                                {seats?.length == 0 || seats == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : seats}
                                {/* {seats} */}
                            </h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[40%] h-[2rem] m-[0.1rem]'>YOM</h1>
                            <h1 className='p-2 bg-gray-200 w-[60%] h-[2rem] m-[0.1rem]'>
                                {/* {yom} */}
                                {yom?.length == 0 || yom == 'undefined' ? <span className='text-gray-500 text-[0.9rem]'>No Info</span> : yom}
                            </h1>
                        </div>

                        <div className='bg-hoverColor my-[1rem] h-[2.5rem] flex items-center justify-center text-[1rem] rounded-sm cursor-pointer font-bold text-gray'>
                            <Link to={`/contactus/${encodeURIComponent(JSON.stringify({ ...briefData, pageName: 'PushSearch' }))}`}>
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
