import React from 'react'
import PageBanner from '../components/PageBanner'
import AboutFlight from '../components/AboutFlight'
import OurServices from '../components/OurServices'
import AirportCount from '../components/AssertsCount'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials_Section/Testimonials'

function AboutUs() {
    return (


        <div>
            <PageBanner data={'About Us'} />
            <AboutFlight />
            <OurServices/>
            <AirportCount/>
            <LearnMore/>
            <Testimonials/>
        </div>



    )
}

export default AboutUs