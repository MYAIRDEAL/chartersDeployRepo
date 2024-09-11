import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import MainHomeComp from './components/Home_Section/MainHomeComp';

import NavBar from './components/NavBar';
import fram from '../src/assets/flightBack.jpg'
import ContactUs from './components/Forms/Booking_Forms/ContactUs';
import AllAvailableCharters from './components/Home_Section/Push_Search/AllAvailableCharters';
import Footer from './components/Footer';
import Blog from './pages/Blog_Post/Blog'
import AboutUs from './pages/AboutUs';
import OurServicesPage from '../src/pages/OurServicesPage';
import PackagePage from './pages/Package/PackagePage';
import AdminPanel from './components/Admin_Section/AdminPanel';
import LogUserActivity from './components/User_Activity/LogUserActivity';
import OurFleetsPage from './components/Home_Section/Our_Fleets/OurFleetsPage';
import OurFleetsDetails from './components/FleetsDetails';
import DemandSearch from './components/Home_Section/Demand_Search/DemandSearch';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactusMain from './components/Forms/Enquiry_Forms/ContactusMain';


function App() {
  return (

    <div className='relative w-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      <Router>

        <LogUserActivity /> {/*  Here Comp is used for getting the log of the user */}
        <NavBar />
        <Routes>
          <Route path="/" element={<MainHomeComp />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<OurServicesPage />} />
          <Route path='/packages' element={<PackagePage />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/adminsectioncontroller' element={<AdminPanel />} />
          <Route path='/contactus/:detailsofbooking' element={<ContactUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/contactusmain/:contactus' element={<ContactusMain />} />
          <Route path='/allavailablecharters' element={<AllAvailableCharters />} />
          <Route path='/ourfleets/:type' element={<OurFleetsPage />} />
          <Route path='/ourfleetsdetails/:moredetails' element={<OurFleetsDetails />} />
          <Route path='/subcategory/:selecttype' element={<DemandSearch />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
        </Routes>   
        <Footer />
      </Router>

    </div>

  );
}

export default App;
