
import React from 'react';



import flightlogo from '../../../assets/OnDemand/FlightPushData.jpg'
import line from '../../../assets/OnDemand/Line.svg'
import flight_mid from '../../../assets/OnDemand/Plane.svg'
// import seat from '../../../assets/OnDemand/Seat.svg'

import { PiSeatDuotone } from "react-icons/pi";
import calendar from '../../../assets/OnDemand/Vector.svg'
import time from '../../../assets/OnDemand/time.svg'
// import smallline from '../../../assets/PushCardImg/smallline.svg'
import smallline from '../../../assets/OnDemand/smallline.svg'
import { Link } from 'react-router-dom';
import moment from 'moment';

function DemandSearchCards({ props }) {
    console.log(props)
    const { _id, chartertype, subCategoryName, duration, reachdate, endtime, pax, speed, price, description, image, availability, bookingtype, departure, arrival, journeytype, date, yom, seats, crew, airhosts, levatory, fromtime, flyingrange, cabinwidth, cabinheight, baggage, cabinlength } = props;


    function formatingDate(originalDate, symbole) {
        const [day, month, year] = originalDate.split(symbole).map(Number);
        const toBeDate = moment({ year, month: month - 1, day });

        // Format the date to "Sun, 29 Jan 2023"
        return toBeDate.format('ddd, DD MMM YYYY');
    }

    console.log()


    return (

        <div className='bg-hoverColor  rounded-lg p-2 flex items-center justify-evenly w-full 600:w-[90%] flex-wrap '>

            <div className='hidden 700:flex'>
                <img src={image} alt="" className='w-[5rem] rounded-xl h-[4rem]' />
            </div>

            <div >
                <div className='hidden 700:flex'>
                    <p> {formatingDate(date, '-')}  </p>
                </div>
                <div className='flex 700:hidden  my-3 '>
                    <img src={calendar} alt="" className='w-[1rem] mr-[0.3rem] ' />
                    <span className=' flex items-center justify-center '>
                        {formatingDate(date, '-')}
                    </span>
                </div>
                <div >
                    <h1>{fromtime}</h1>
                    <p>
                        {departure}
                    </p>
                </div>

            </div>

            <div className='flex flex-col items-center' >
                <h1 className='hidden 700:flex' >
                    {duration}
                </h1>
                <div className='items-center hidden 370:flex justify-center '>
                    <img src={line} alt="" className='hidden 1150:flex' />
                    <img src={smallline} alt="" className='flex 1150:hidden' />

                    <img src={flight_mid} alt="" className='1150:mx-3' />

                    <img src={line} alt="" className='hidden 1150:flex' />
                    <img src={smallline} alt="" className='flex 1150:hidden' />
                </div>
            </div>



            <div>


                <div className='hidden 700:flex'>
                    <p>{formatingDate(reachdate, '/')}</p>
                </div>

                <div className='flex 700:hidden my-3 '>
                    <img src={time} alt="" className='w-[1rem] mr-[0.2rem] ' />
                    <span className='flex items-center justify-center '>
                        {duration}
                    </span>
                </div>



                <div>
                    <h1>{endtime}</h1>
                    <p>
                        {arrival}
                    </p>
                </div>


            </div>

            <div className=' w-[100%] 600:w-auto  flex items-center justify-center'>
                <Link to={`/ourfleetsdetails/${encodeURIComponent(JSON.stringify(props))}`} state={{page : 'subcategory'}}>
                    <button className='bg-white text-hoverColor font-semibold w-[13rem] 600:w-[10rem] h-[2.5rem] mx-2 rounded-lg hover:scale-105 transition-all duration-300'>
                        Book Now
                    </button>
                </Link>
            </div>
            <div className='hidden 1024:flex flex-col items-center gap-1 justify-center'>
                {/* <img src={seat} alt="" /> */}
                <div className='flex'>
                <PiSeatDuotone />
                <PiSeatDuotone />
                <PiSeatDuotone />
                </div>
                <h1>Total seats : {seats}</h1>
            </div>

        </div>

    )





}

export default DemandSearchCards;




// return (
//     <div className='flex 1024:flex-row flex-col justify-around items-center bg-white h-[25rem] rounded-lg shadow-xl cursor-pointer transition-all duration-700 md:w-[80%] 700:h-[28rem] 1024:h-[11rem]'>
//         <div>

//             <div className=' flex flex-col  items-center '>

//                 <img src={image} alt="" className='rounded-full w-[6rem]' />
//                 <h1 className='text-[1.5rem]'>{subCategoryName}</h1>
//             </div>

//         </div>

//         <div className='flex flex-col items-center justify-around h-[10rem] md:h-[6rem] '>
//             <div className='flex items-center text-[1.5rem] justify-around md:w-[30rem] w-[20rem] bg-white'>
//                 <h1>{departure}</h1>
//                 <div className='flex gap-3 items-center'>
//                     <div className='border-dashed w-6 h-0 text-black border-[2px] border-black'></div>
//                     <MdOutlineFlightTakeoff />
//                     <div className='border-dashed w-6 h-0 text-black border-[2px] border-black'></div>
//                 </div>
//                 <h1>{arrival}</h1>
//             </div>
//             <p>{date}</p>
//             <div className='flex justify-around md:w-[30rem] w-[20rem] items-center'>
//                 <p>{fromtime}</p>
//                 <MdOutlineArrowRightAlt className='mb-2 w-[2rem] h-[2rem]' />
//                 <p>{endtime}</p>
//             </div>
//         </div>
//         <div className=' flex items-center justify-center'>
//             <Link to={`/ourfleetsdetails/${encodeURIComponent(JSON.stringify(props))}`}>

//                 <button className='bg-hoverColor w-[11rem] h-[3rem] text-white rounded-lg transition-all hover:scale-110 duration-700'>
//                     View More Details
//                 </button>

//             </Link>
//         </div>

//     </div>
// );