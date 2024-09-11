import React from 'react'
import fram from '../../assets/HeroBg.png'
import HeroSection from '../Home_Section/HeroSection'

const NavHeroBar = () => {
    return (
        <div id="navHerSection" className="relative bg-fixed bg-cover bg-center h-[50vh] md:h-[100vh] bg-black" style={{ backgroundImage: `url(${fram})` }}>
            <div className="relative z-10 overflow-auto h-full">
                <HeroSection />
            </div>
        </div>
    )
}
export default NavHeroBar