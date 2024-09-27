import React from 'react'
import PageBanner from '../components/PageBanner'
import AboutFlight from '../components/AboutFlight'
import OurServices from '../components/OurServices'
import AirportCount from '../components/AssertsCount'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials_Section/Testimonials'
import EnquiryPopUp from '../components/EnquiryPopUp'

function AboutUs({ temp, setTemp }) {
    return (


        <div>

            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>


            <PageBanner data={'About Us'} />
            <AboutFlight />
            <OurServices />
            <AirportCount />
            <LearnMore />
            <Testimonials />
        </div>



    )
}

export default AboutUs