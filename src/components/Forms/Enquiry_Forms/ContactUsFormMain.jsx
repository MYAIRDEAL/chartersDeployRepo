import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsFormMain() {


    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);



    const [formData, setFormData] = useState({
        enquiryname: localStorage.getItem('enquiryname') || '',
        enquiryemail: localStorage.getItem('enquiryemail') || '',
        enquiryphone: localStorage.getItem('enquiryphone') || '',
        enquirytype: localStorage.getItem('enquirytype') || '',
        enquirydate : formattedDate,
    });



    useEffect(() => {
        Object.keys(formData).forEach(key => {
            localStorage.setItem(key, formData[key]);
        });
    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

  

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/admin/addenquiry', formData);
            setFormData({
                enquiryname: '',
                enquiryemail: '',
                enquiryphone: '',
                enquirytype: ''
            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
        }
    };




    return (
        <div className='w-[46rem]   flex justify-center flex-col'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>REQUEST A CALL BACK</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>Get In Touch.</h1>
                    <form className='flex flex-wrap m-3' onSubmit={handleSubmit}>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="name" className=' text-hoverColor mx-3 text-[1rem]'> Name </label>
                            <input
                                type="text"
                                name='enquiryname'
                                // placeholder='Name'
                                required
                                className={` 344:w-[19rem] my-0  360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor`}
                                onChange={handleChange}
                                value={formData.enquiryname}
                                x />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="email" className=' text-hoverColor mx-3 text-[1rem]'> Email </label>
                            <input
                                type="email"
                                name='enquiryemail'
                                required
                                // placeholder='Email'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquiryemail}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="phone" className=' text-hoverColor mx-3 text-[1rem]'> Mobile Number </label>
                            <input
                                type="number"
                                name='enquiryphone'
                                required
                                // placeholder='Phone'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquiryphone}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="type" className=' text-hoverColor mx-3 text-[1rem]'>Type of Service Looking For </label>
                            <input
                                type="text"
                                name='enquirytype'
                                required
                                // placeholder='Mid Size'
                                className='344:w-[19rem] my-0 360:w-[20.5rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.enquirytype}
                            />
                        </div>



                        <div className='flex items-center mt-5'>
                            <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3  bg-hoverColor text-white rounded-lg'>
                                Get In Touch
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsFormMain;
