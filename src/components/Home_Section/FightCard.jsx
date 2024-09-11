import React from 'react';

import flighcenter from '../../assets/PushSearch/FlightCenter.svg'
import flighlanding from '../../assets/PushSearch/FlightLanding.svg'
import flightakeoff from '../../assets/PushSearch/FlightTakeOff.svg'
import leftArrow from '../../assets/PushSearch/leftArrow.svg'
import rightArrow from '../../assets/PushSearch/rightArrow.svg'
import suitcases from '../../assets/PushSearch/Suitcases.svg'
import { Link } from 'react-router-dom';

function FightCard({ props }) {

    return (

        <div className=' flex items-center justify-center flex-wrap gap-4'>

            <div className='bg-white rounded-lg 600:w-[25rem] w-[22rem] shadow-2xl flex flex-col p-3'>

                <div className='flex items-center justify-center'>
                    <h1 className='text-[1.5rem] font-bold text-hoverColor'> Legacy 300</h1>
                </div>

                <div className='flex  items-center justify-evenly my-3'>
                    <div className='flex flex-col items-center justify-center '>
                        <img src={flightakeoff} alt="" className='w-[1.5rem] my-1' />
                        <h1>{props?.departure}</h1>
                    </div>

                    <div className=' flex flex-col items-center justify-center'>
                        <div className='flex '>
                            <img src={leftArrow} alt="" />
                            <img src={flighcenter} alt="" className='w-[2rem]' />
                            <img src={rightArrow} alt="" />
                        </div>
                        <span>
                            {props?.date}
                        </span>
                    </div>

                    <div className='flex flex-col items-center justify-center '>
                        <img src={flighlanding} alt="" className='w-[1.5rem] my-1' />
                        <h1>{props?.departure}</h1>
                    </div>

                </div>

                <div className='flex justify-between px-3 my-1'>
                    <h1>{props?.fromtime}</h1>
                    <h1>{props?.endtime}</h1>
                </div>

                <div className='flex 600:justify-between justify-around'>

                    <div className='hidden 600:flex   items-center justify-center '>
                        <img src={suitcases} alt="" className='w-[1.2rem] mx-2' />
                        <span className='text-[0.9rem]' >
                            Baggage {props?.baggage} kg
                        </span>
                    </div>

                    <div className='flex  items-center justify-between  '>
                        <h1 className='text-red-700 font-bold px-2 text-[0.7rem]'>
                            <span className='line-through'> {props?.price}</span>
                            <span className=' text-[1rem] text-green-600 '> (-{props?.discount}%) </span>
                        </h1>
                        <Link to={`/contactus/${encodeURIComponent(JSON.stringify(props))}`} >
                            <button className='bg-hoverColor  text-[0.9rem] font-semibold rounded-md p-2 h-[2.5rem]'>
                                Book now for $ {props?.discountprice}
                            </button>
                        </Link>
                    </div>

                </div>

            </div>


        </div>

    );
}

export default FightCard;



// <div className='flex flex-col m-1 bg-white items-center justify-center h-[15rem] rounded-lg shadow-xl cursor-pointer transition-all duration-700'>
//             <div className='flex items-center text-[1.1rem] justify-around  375:w-[17rem] 400:w-[18rem]  md:w-[25rem] '>
//                 <h1 className='overflow-hidden'>{props?.departure}</h1>
//                 <MdOutlineArrowRightAlt />
//                 <h1 className='overflow-hidden'>{props?.arrival}</h1>
//             </div>
//             <p>{props?.date}</p>
//             <div className='flex justify-around w-[15rem] items-center'>
//                 <p>{props?.fromtime}</p>
//                 <MdOutlineArrowRightAlt className='mb-2' />
//                 <p>{props?.endtime}</p>
//             </div>
//             <p className='text-green-500 font-semibold'>
//                 <span className='line-through text-red-400'>${props?.price} </span>
//                 (-{props?.discount}%)
//             </p>

//             <Link to={`/contactus/${encodeURIComponent(JSON.stringify(props))}`} >

//                 <button className='bg-hoverColor w-[9rem] h-[2.5rem] text-white rounded-lg transition-all hover:scale-110 duration-700'>
//                     Book for ${props?.discountprice}
//                 </button>

//             </Link>
//         </div>