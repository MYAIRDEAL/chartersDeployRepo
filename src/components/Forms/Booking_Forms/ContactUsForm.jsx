import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

function ContactUsForm({ props }) {

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);

    const [formData, setFormData] = useState({
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        type: props?.chartertype || localStorage.getItem('type') || 'Mid Size',
        departure: props?.departure || localStorage.getItem('departure') || 'Departure',
        arrival: props?.arrival || localStorage.getItem('arrival') || 'Arrival',
        passengers: props?.passengers || localStorage.getItem('passengers') || '1',
        date: formattedDate || localStorage.getItem('date') || '21-09-2023'
    });




    useEffect(() => {
        Object.keys(formData).forEach(key => {
            localStorage.setItem(key, formData[key]);
        });
        return () => {
            localStorage.clear();
        }
    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event?.target?.name]: event?.target?.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // message.success('handled')

        if (formData?.phone?.length !== 10) {
            message.error('give phone number correctly')
            return 1
        }

        try {
            await axios.post('http://localhost:8000/api/admin/addbooking', formData);
            // await axios.post('https://privatejetcharters-server-ttz1.onrender.com/api/admin/addbooking', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                type: '',
                departure: props?.departure || 'Bangalore',
                arrival: props?.arrival || 'Dubai',
                passengers: props?.passengers || '1',
                date: props?.date || '21-09-2023'
            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
        }
    };



    return (
        <div className='w-[40rem]   flex justify-center flex-col'>
            <div>
                <h1 className='text-hoverColor tracking-[0.5rem] my-7 mx-4'>REQUEST A CALL BACK</h1>
                <div>
                    <h1 className='md:text-[3vw] text-[2rem] m-3'>Get In Touch.</h1>
                    <form className='flex flex-wrap m-3' onSubmit={handleSubmit}>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="name" className=' text-hoverColor mx-3 text-[1rem]'> Name </label>
                            <input
                                type="text"
                                name='name'
                                // placeholder='Name'
                                required
                                className={` 344:w-[19rem] my-0  360:w-[17rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor`}
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="email" className=' text-hoverColor mx-3 text-[1rem]'> Email </label>
                            <input
                                type="email"
                                name='email'
                                required
                                // placeholder='Email'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="phone" className=' text-hoverColor mx-3 text-[1rem]'> Mobile Number </label>
                            <input
                                type="number"
                                name='phone'
                                required
                                // placeholder='Phone'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem]  outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="type" className=' text-hoverColor mx-3 text-[1rem]'>Type Of Service Looking For </label>
                            <input
                                type="text"
                                name='type'
                                required
                                // placeholder='Mid Size'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.type}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="departure" className=' text-hoverColor mx-3 text-[1rem]'> Departure </label>
                            <input
                                type="text"
                                name='departure'
                                required
                                // placeholder='Departure'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.departure}
                            />
                        </div>

                        <div className='flex flex-col my-1'>
                            <label htmlFor="arrival" className=' text-hoverColor mx-3 text-[1rem]'> Arrival </label>
                            <input
                                type="text"
                                name='arrival'
                                required
                                // placeholder='Arrival'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.arrival}
                            />
                        </div>


                        <div className='flex flex-col my-1'>
                            <label htmlFor="date" className=' text-hoverColor mx-3 text-[1rem]'> Date </label>
                            <input
                                type="text"
                                name='date'
                                required
                                // placeholder={formattedDate}
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.date}
                            />
                        </div>
                        <div className='flex flex-col my-1'>
                            <label htmlFor="passengers" className=' text-hoverColor mx-3 text-[1rem]'> Pax </label>
                            <input
                                type="text"
                                name='passengers'
                                required
                                // placeholder='0'
                                className='344:w-[19rem] my-0 360:w-[17rem] mx-3 h-[3rem] outline-none border-b-2 border-hoverColor'
                                onChange={handleChange}
                                value={formData.passengers}
                            />
                        </div>
                        <button className='w-[10rem] transition-all hover:scale-110 duration-500 h-[3rem] tracking-widest m-3 bg-hoverColor text-white rounded-lg'>
                            Get In Touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;
