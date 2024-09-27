// import React, { useEffect, useState, useRef } from 'react';
import { DatePicker, message } from 'antd';
// import 'antd/dist/reset.css'; // Import Ant Design styles
// import { IoMdSwap } from "react-icons/io";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import dayjs from 'dayjs'; // Import dayjs to manage dates

// const Example = () => {
//     const [dateData, setDate] = useState(localStorage.getItem('dateData') || '');
//     const [fromValue, setFromValue] = useState(localStorage.getItem('fromvalue') || '');
//     const [toValue, setToValue] = useState(localStorage.getItem('tovalue') || '');
//     const [selectType, setSelectType] = useState('');
//     const [formData, setFormData] = useState(null);
//     const [passengers, setPassengers] = useState(localStorage.getItem('passengers') || '');
//     const [selectTypePopUp, setSelectTypePopUp] = useState(false);
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();
//     const [getType, setGetType] = useState([]);
//     const [startDate, setStartDate] = useState(null); // Single date state

//     // Function to format date in DD-MM-YYYY format
//     const formatDate = (date) => {
//         if (!date) return '';
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}-${month}-${year}`;
//     };

//     const onChange = (date) => {
//         setStartDate(date);
//         setDate(formatDate(date)); // Update dateData based on selected date
//     };

//     useEffect(() => {
//         localStorage.setItem('passengers', passengers);
//         localStorage.setItem('tovalue', toValue);
//         localStorage.setItem('fromvalue', fromValue);
//         localStorage.setItem('dateData', dateData);

//         return () => {
//             localStorage.clear();
//         };
//     }, [passengers, toValue, fromValue, dateData]);

//     const handleFromChange = (e) => setFromValue(e.target.value);
//     const handleToChange = (e) => setToValue(e.target.value);

//     const handleSwap = () => {
//         setFromValue(toValue);
//         setToValue(fromValue);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event?.target)) {
//             setSelectTypePopUp(false);
//         }
//     };

//     const handleOptionClick = (option) => {
//         setSelectType(option);
//         setSelectTypePopUp(false);
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const formHandler = (element) => {
//         element.preventDefault();

//         const capitalizeFirstLetter = (word) => {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         };

//         let arrival = capitalizeFirstLetter(element.target?.to?.value);
//         let departure = capitalizeFirstLetter(element.target?.from?.value);
//         let pax = element.target?.passengers?.value;
//         let date = dateData;
//         let section = selectType;

//         let postData = { arrival, departure, pax, date, section };

//         if (arrival?.length !== 0 && departure?.length !== 0 && pax?.length !== 0 && date?.length !== 0 && section?.length !== 0) {
//             setFormData(postData);
//         }
//         else {
//             message.error('Fill All the Details or Select Valid Type');
//             setFormData(false);
//         }
//     };

//     useEffect(() => {
//         const sendData = () => {
//             if (formData) {
//                 try {
//                     const responseData = JSON.stringify(formData);
//                     const encodedData = encodeURIComponent(responseData);
//                     navigate(`/subcategory/${encodedData}`);
//                 } catch (error) {
//                     // handell in silently
//                 }
//             }
//         };

//         sendData();
//     }, [formData]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let temp = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getalltypes');
//                 setGetType(temp.data?.data || []);
//             } catch (error) {
//                 // handell in silently
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='w-full py-[3rem] flex flex-col justify-center items-center'>
//             <h1 className='md:text-[2.5rem] text-[1.5rem] text-white font-semibold'>Private Jet Charters</h1>
//             <div className='w-[75%] font-semibold md:flex hidden flex-wrap gap-2'>
//                 {getType?.length > 0 ? (
//                     getType.map((e) => {
//                         if (e.active === 'yes') {
//                             return (
//                                 <button
//                                     className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg text-white transition-all duration-700 ${selectType === e.section ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`}
//                                     onClick={() => setSelectType(e.section)}
//                                     key={e._id}
//                                 >
//                                     {e.section}
//                                 </button>
//                             );
//                         }
//                         return null;
//                     })
//                 ) : (
//                     <p className='text-hoverColor'>No Type Available</p>
//                 )}
//             </div>

//             <div className='w-[80%] md:hidden flex flex-col relative' ref={dropdownRef}>
//                 <div
//                     className='w-[50%] flex items-center justify-around rounded-lg bg-hoverColor text-white cursor-pointer'
//                     onClick={() => setSelectTypePopUp((prev) => !prev)}
//                 >
//                     <p className='mt-2 flex items-center'>{selectType || 'Select Type'}</p>
//                 </div>
//                 <div
//                     className={`absolute w-[50%] mt-2 rounded-lg bg-selectType ${selectTypePopUp ? 'block' : 'hidden'} z-10`}
//                     style={{ top: '100%' }}
//                 >
//                     <ul className='list-none p-0 m-0'>
//                         {getType?.length > 0 ? (
//                             getType.map((element, index) => {
//                                 if (element.active === 'yes') {
//                                     return (
//                                         <li
//                                             className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === `${element.section}` ? 'bg-hoverColor' : ''}`}
//                                             onClick={() => handleOptionClick(`${element.section}`)}
//                                             key={index}
//                                         >
//                                             {element.section}
//                                         </li>
//                                     );
//                                 }
//                                 return null;
//                             })
//                         ) : (
//                             <p className='text-hoverColor'>No Type Available</p>
//                         )}
//                     </ul>
//                 </div>
//             </div>

//             <form action="#" method='post' onSubmit={formHandler}>
//                 <div className="form bg-white p-10">
//                     <div id='first'>
//                         <div id='oneinnerdiv'>
//                             <input
//                                 type='text'
//                                 name='from'
//                                 id='from'
//                                 placeholder='Departure'
//                                 value={fromValue} onChange={handleFromChange}
//                             />
//                             <div id='icon'>
//                                 <IoMdSwap onClick={handleSwap} className='cursor-pointer w-full h-full border-none outline-none' />
//                             </div>
//                             <input
//                                 type='text'
//                                 name='to'
//                                 id='to'
//                                 placeholder='Arrival'
//                                 value={toValue}
//                                 onChange={handleToChange}
//                                 className='pr-3'
//                             />
//                         </div>
//                     </div>

//                     {/* Single Date Picker Input */}
//                     <div id="date-picker" className="flex items-center space-x-4 mt-4">
//                         <DatePicker
//                             className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
//                             placeholder="Select Date"
//                             format="DD-MM-YYYY"
//                             value={startDate}
//                             onChange={onChange}
//                             disabledDate={(current) => current && current < dayjs().startOf('day')} // Disable past dates
//                         />
//                     </div>

//                     <div id='third'>
//                         <input
//                             type='number'
//                             name='passengers'
//                             id='passengers'
//                             placeholder='Passengers'
//                             value={passengers} onChange={(e) => setPassengers(e.target.value)}
//                         />
//                     </div>

//                     <button type='submit' id='button'>Show Estimates</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Example;


import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import axios from 'axios';

const images = [
    'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3',
    'https://via.placeholder.com/800x400/FFFF00/FFFFFF?text=Slide+4',
    'https://via.placeholder.com/800x400/FF00FF/FFFFFF?text=Slide+5',
];

const Example = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [customerExperience, setCustomerExperience] = useState([]);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallfeedback');
                setCustomerExperience(response.data.feedback);
            } catch (error) {
                // Handle the error gracefully
            }
        };
        fetchExperience();
    }, []);

    useEffect(() => {
        // Auto-slide logic
        const autoSlide = setTimeout(() => {
            handleNext();
        }, 5000); // Auto-slide every 5 seconds

        return () => clearTimeout(autoSlide); // Cleanup on unmount or index change
    }, [currentIndex]);

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? customerExperience.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === customerExperience.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div id="default-carousel" className="relative w-full p-4 md:w-[50%] align-middle" data-carousel="slide">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden rounded-lg md:h-96">
                {/* Carousel Items */}
                {customerExperience.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                            } ${index === currentIndex ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <p className='text-white text-[1rem] tracking-wider leading-7'>
                            {slide.feedback}
                        </p>
                        <div className="flex  pb-7">
                            <div className=" text-white  flex justify-center p-1 text-[2rem] h-[3rem] w-[3rem] rounded-full bg-hoverColor">
                                <h1>{slide.name.slice(0, 2)}</h1>
                            </div>
                            <div className="ml-5 text-white">
                                <h1>{slide.name}</h1>
                                <h1 className="text-hoverColor">{slide.service}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider Indicators
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {customerExperience.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleIndicatorClick(index)}
                    ></button>
                ))}
            </div> */}


        </div>
    );
};

export default Example;
