import React, { useEffect, useState, useRef } from 'react';
import { DatePicker, message } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { IoMdSwap } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'; // Import dayjs to manage dates

const Example = () => {
    const [dateData, setDate] = useState(localStorage.getItem('dateData') || '');
    const [fromValue, setFromValue] = useState(localStorage.getItem('fromvalue') || '');
    const [toValue, setToValue] = useState(localStorage.getItem('tovalue') || '');
    const [selectType, setSelectType] = useState('');
    const [formData, setFormData] = useState(null);
    const [passengers, setPassengers] = useState(localStorage.getItem('passengers') || '');
    const [selectTypePopUp, setSelectTypePopUp] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const [getType, setGetType] = useState([]);
    const [startDate, setStartDate] = useState(null); // Single date state

    // Function to format date in DD-MM-YYYY format
    const formatDate = (date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const onChange = (date) => {
        setStartDate(date);
        setDate(formatDate(date)); // Update dateData based on selected date
    };

    useEffect(() => {
        localStorage.setItem('passengers', passengers);
        localStorage.setItem('tovalue', toValue);
        localStorage.setItem('fromvalue', fromValue);
        localStorage.setItem('dateData', dateData);

        return () => {
            localStorage.clear();
        };
    }, [passengers, toValue, fromValue, dateData]);

    const handleFromChange = (e) => setFromValue(e.target.value);
    const handleToChange = (e) => setToValue(e.target.value);

    const handleSwap = () => {
        setFromValue(toValue);
        setToValue(fromValue);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event?.target)) {
            setSelectTypePopUp(false);
        }
    };

    const handleOptionClick = (option) => {
        setSelectType(option);
        setSelectTypePopUp(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formHandler = (element) => {
        element.preventDefault();

        const capitalizeFirstLetter = (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        };

        let arrival = capitalizeFirstLetter(element.target?.to?.value);
        let departure = capitalizeFirstLetter(element.target?.from?.value);
        let pax = element.target?.passengers?.value;
        let date = dateData;
        let section = selectType;

        let postData = { arrival, departure, pax, date, section };

        if (arrival?.length !== 0 && departure?.length !== 0 && pax?.length !== 0 && date?.length !== 0 && section?.length !== 0) {
            setFormData(postData);
        }
        else {
            message.error('Fill All the Details or Select Valid Type');
            setFormData(false);
        }
    };

    useEffect(() => {
        const sendData = () => {
            if (formData) {
                try {
                    const responseData = JSON.stringify(formData);
                    const encodedData = encodeURIComponent(responseData);
                    navigate(`/subcategory/${encodedData}`);
                } catch (error) {
                    // handell in silently
                }
            }
        };

        sendData();
    }, [formData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let temp = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getalltypes');
                setGetType(temp.data?.data || []);
            } catch (error) {
                // handell in silently
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full py-[3rem] flex flex-col justify-center items-center'>
            <h1 className='md:text-[2.5rem] text-[1.5rem] text-white font-semibold'>Private Jet Charters</h1>
            <div className='w-[75%] font-semibold md:flex hidden flex-wrap gap-2'>
                {getType?.length > 0 ? (
                    getType.map((e) => {
                        if (e.active === 'yes') {
                            return (
                                <button
                                    className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg text-white transition-all duration-700 ${selectType === e.section ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`}
                                    onClick={() => setSelectType(e.section)}
                                    key={e._id}
                                >
                                    {e.section}
                                </button>
                            );
                        }
                        return null;
                    })
                ) : (
                    <p className='text-hoverColor'>No Type Available</p>
                )}
            </div>

            <div className='w-[80%] md:hidden flex flex-col relative' ref={dropdownRef}>
                <div
                    className='w-[50%] flex items-center justify-around rounded-lg bg-hoverColor text-white cursor-pointer'
                    onClick={() => setSelectTypePopUp((prev) => !prev)}
                >
                    <p className='mt-2 flex items-center'>{selectType || 'Select Type'}</p>
                </div>
                <div
                    className={`absolute w-[50%] mt-2 rounded-lg bg-selectType ${selectTypePopUp ? 'block' : 'hidden'} z-10`}
                    style={{ top: '100%' }}
                >
                    <ul className='list-none p-0 m-0'>
                        {getType?.length > 0 ? (
                            getType.map((element, index) => {
                                if (element.active === 'yes') {
                                    return (
                                        <li
                                            className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === `${element.section}` ? 'bg-hoverColor' : ''}`}
                                            onClick={() => handleOptionClick(`${element.section}`)}
                                            key={index}
                                        >
                                            {element.section}
                                        </li>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <p className='text-hoverColor'>No Type Available</p>
                        )}
                    </ul>
                </div>
            </div>

            <form action="#" method='post' onSubmit={formHandler}>
                <div className="form bg-white p-10">
                    <div id='first'>
                        <div id='oneinnerdiv'>
                            <input
                                type='text'
                                name='from'
                                id='from'
                                placeholder='Departure'
                                value={fromValue} onChange={handleFromChange}
                            />
                            <div id='icon'>
                                <IoMdSwap onClick={handleSwap} className='cursor-pointer w-full h-full border-none outline-none' />
                            </div>
                            <input
                                type='text'
                                name='to'
                                id='to'
                                placeholder='Arrival'
                                value={toValue}
                                onChange={handleToChange}
                                className='pr-3'
                            />
                        </div>
                    </div>

                    {/* Single Date Picker Input */}
                    <div id="date-picker" className="flex items-center space-x-4 mt-4">
                        <DatePicker
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                            placeholder="Select Date"
                            format="DD-MM-YYYY"
                            value={startDate}
                            onChange={onChange}
                            disabledDate={(current) => current && current < dayjs().startOf('day')} // Disable past dates
                        />
                    </div>

                    <div id='third'>
                        <input
                            type='number'
                            name='passengers'
                            id='passengers'
                            placeholder='Passengers'
                            value={passengers} onChange={(e) => setPassengers(e.target.value)}
                        />
                    </div>

                    <button type='submit' id='button'>Show Estimates</button>
                </div>
            </form>
        </div>
    );
};

export default Example;
