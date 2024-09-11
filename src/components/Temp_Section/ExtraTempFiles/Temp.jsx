import './Tempcss.css'; // Import your custom CSS file for animations
import React from 'react';
import 'antd/dist/reset.css'; // Import Ant Design styles
// import { IoMdSwap } from "react-icons/io";

// const { RangePicker } = DatePicker;

import flighcenter from '../../../assets/PushSearch/FlightCenter.svg'
import flighlanding from '../../../assets/PushSearch/FlightLanding.svg'
import flightakeoff from '../../../assets/PushSearch/FlightTakeOff.svg'
import leftArrow from '../../../assets/PushSearch/leftArrow.svg'
import rightArrow from '../../../assets/PushSearch/rightArrow.svg'
import suitcases from '../../../assets/PushSearch/Suitcases.svg'


const Temp = () => {
  return (



    <div className=' flex items-center justify-center flex-wrap gap-4'>

      <div className='bg-white rounded-lg 600:w-[27rem] w-[22rem] shadow-lg flex flex-col p-3'>

        <div className='flex items-center justify-center'>
          <h1 className='text-[1.5rem] font-bold text-hoverColor'> Legacy 300</h1>
        </div>

        <div className='flex  items-center justify-evenly my-3'>

          <div className='flex flex-col items-center justify-center '>
            <img src={flightakeoff} alt="" className='w-[1.5rem] my-1' />
            <h1>City 1</h1>
          </div>

          <div className=' flex flex-col items-center justify-center'>
            <div className='flex '>
              <img src={leftArrow} alt="" />
              <img src={flighcenter} alt="" className='w-[2rem]' />
              <img src={rightArrow} alt="" />
            </div>
            <span>
              04-02-2003
            </span>
          </div>

          <div className='flex flex-col items-center justify-center '>
            <img src={flighlanding} alt="" className='w-[1.5rem] my-1' />
            <h1>City 9</h1>
          </div>

        </div>

        <div className='flex justify-between px-3 my-1'>
          <h1>00:08:10</h1>
          <h1>00:08:10</h1>
        </div>

        <div className='flex 600:justify-between justify-around'>


          <div className='hidden 600:flex   items-center justify-center '>
            <img src={suitcases} alt="" className='w-[1.2rem] mx-2' />
            <span className='text-[0.9rem]' >
              Baggage 17 kg
            </span>
          </div>

          <div className='flex  items-center justify-between  '>
            <h1 className='text-red-700 font-bold px-2 text-[0.7rem]'>
              <span className='line-through'> 5677</span>
              <span className=' text-[1rem] text-green-600 '> (-30%) </span>
            </h1>

            <button className='bg-hoverColor  text-[0.9rem] font-semibold rounded-md p-2 h-[2.5rem]'>
              Book now for $561
            </button>
          </div>

        </div>

      </div>

      
    </div>
  )
};

export default Temp;


// this is for on demand card code starts

{/* <div className='flex items-center justify-center flex-wrap gap-3 h-[100vh]'>

<div className='bg-hoverColor  rounded-lg p-2 flex items-center justify-evenly w-[85%] flex-wrap '>

  <div className='hidden 700:flex'>
    <img src={flightlogo} alt="" className='w-[5rem] rounded-xl h-[4rem]' />
  </div>

  <div >
    <div className='hidden 700:flex'>
      <p>Sun, 29 Jan 2023</p>
    </div>
    <div className='flex 700:hidden  my-3 '>
      <img src={calendar} alt="" className='w-[1rem] mr-[0.3rem] ' />
      <span className=' flex items-center justify-center '>
        01/02/2024
      </span>
    </div>


    <div >
      <h1>14:50</h1>
      <p>
        Dharmapuri
      </p>
    </div>


  </div>

  {/* <div>
<img src={line} alt="" />
</div> 

  <div className='flex flex-col items-center' >
    <h1 className='hidden 700:flex' >
      9hr 50min
    </h1>
    <div className='flex items-center justify-center '>
      <img src={line} alt="" className='hidden 1150:flex' />
      <img src={smallline} alt="" className='flex 1150:hidden' />

      <img src={flight_mid} alt="" className='1150:mx-3' />

      <img src={line} alt="" className='hidden 1150:flex' />
      <img src={smallline} alt="" className='flex 1150:hidden' />
    </div>
  </div>



  <div>


    <div className='hidden 700:flex'>
      <p>Sun, 29 Jan 2023</p>
    </div>

    <div className='flex 700:hidden my-3 '>
      <img src={time} alt="" className='w-[1rem] mr-[0.2rem] ' />
      <span className='flex items-center justify-center '>
        9hr 50min
      </span>
    </div>



    <div>
      <h1>14:50</h1>
      <p>
        Dharmapuri
      </p>
    </div>


  </div>

  <div className=' w-[100%] 600:w-auto  flex items-center justify-center'>
    <button className='bg-white text-hoverColor font-semibold w-[80%] 600:w-[8rem] h-[2.5rem] mx-2 rounded-lg hover:scale-105 transition-all duration-300'>
      Book Now
    </button>
  </div>


  <div className='hidden 1367:flex flex-col items-center justify-center'>
    <img src={seat} alt="" />
    <h1>Total seats : 15</h1>
  </div>


</div>

</div> */}

// this cod end's here








// return (


//   <form >

//     <div className="form">


//       <div id='first' >
//         <label htmlFor='from'>FROM</label>
//         <div id='oneinnerdiv' >
//           <input
//             type='text'
//             name='from'
//             id='from'
//             placeholder='VOBL'

//           />
//           <IoMdSwap id='icon' />
//           <input
//             type='text'
//             name='to'
//             id='to'
//             placeholder='OMDW'

//           />
//         </div>
//       </div>


//       <div className='second' >
//         <label htmlFor='departure'>DEPARTURE</label>
//         <DatePicker
//           showTime
//           format='DD-MM-YYYY HH:mm'
//           id='date'
//         />

//       </div>

//       <div className='third'>
//         <label htmlFor='passengers'>PASSENGERS</label>
//         <input
//           type='number'
//           name='passengers'
//           placeholder='134'

//         />
//       </div>

//       <div className='fourth' >
//         <label htmlFor='phone'>Phone</label>
//         <input
//           type='number'
//           name='phone'

//         />
//       </div>


//       <div className='five'>
//         <label htmlFor='email'>Email</label>
//         <input
//           type='email'
//           name='email'

//         />
//       </div>


//       <div className='six' >
//         <label htmlFor='name'>Name</label>
//         <input
//           type='text'
//           name='name'

//         />
//       </div>

//       <div className='seven' >
//         <button
//           type='submit'

//         >
//           SHOW ESTIMATES
//         </button>
//       </div>


//     </div>

//   </form>


// );



/*


<form action="#" className='w-[100%] flex items-center justify-center' onSubmit={formHandler}>
                <div className=' text-white flex flex-wrap items-center justify-around md:w-[70%] h-[25rem]  md:h-[12rem] p-2'>

                    <div className='flex items-center justify-center text-black rounded-lg p-2 w-full md:w-auto md:p-0'>

                        <div className='flex flex-col '>
                            <h1 className='text-white'>FROM</h1>
                            <div className='md:w-[15rem] h-[3.5rem] flex justify-center md:pl-[2rem] w-[15rem] bg-white rounded-l-lg '>
                                <input type="text" name="from" id="from" placeholder='VOBL' className='w-full rounded-l-lg border-none p-2 outline-none' value={fromValue} onChange={handleFromChange} />
                            </div>
                        </div>


                        <div className='items-center h-[3rem] flex justify-center'>
                            <IoMdSwap className='w-[1.5rem]  text-black absolute mt-5 mr-5 h-[1.5rem] cursor-pointer' onClick={handleSwap} />
                        </div>


                        <div className='flex flex-col '>
                            <h1 className='text-white'>TO</h1>
                            <div className='md:w-[15rem] h-[3.5rem] flex justify-center md:pl-[2rem] w-[15rem] bg-white rounded-r-lg'>
                                <input type="text" name="to" id="to" placeholder='OMDW' className='w-full border-none outline-none rounded-r-lg p-2' value={toValue} onChange={handleToChange} />
                            </div>
                        </div>
                    </div>


                    <div >
                        <h1>DEPARTURE</h1>
                        <Space direction="vertical" className='md:w-[15rem]'>
                            <DatePicker
                                showTime
                                format={'DD-MM-YYYY HH:mm'}
                                onChange={onChange}
                                className='md:w-full w-[14rem] h-[3.5rem]'
                            />
                        </Space>
                    </div>

                    <div className='md:w-[13rem] w-[14rem] rounded-lg'>
                        <h1>
                            PASSENGERS
                        </h1>
                        <input type="number" name='passengers' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className='md:w-[13rem]  w-[14rem] rounded-lg'>
                        <h1>
                            Phone
                        </h1>
                        <input type="number" name='phone' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className='md:w-[16rem] w-[14rem]  rounded-lg'>
                        <h1>
                            Email
                        </h1>
                        <input type="email" name='email' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className=' md:w-[13rem]  w-[14rem]  rounded-lg'>
                        <h1>
                            Name
                        </h1>
                        <input type="email" name='name' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>

                    <div className=' md:w-auto md:mt-0 mt-6'>
                        <button className='bg-hoverColor tracking-[0.2rem] p-3 transition-all hover:scale-110 duration-500 text-white h-[3.5rem] md:w-[10rem]  md:mt-6 w-[14rem] rounded-lg'>
                            SHOW ESTIMATES
                        </button>
                    </div>



                </div>
            </form>


*/