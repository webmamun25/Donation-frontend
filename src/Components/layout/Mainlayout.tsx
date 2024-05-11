
import { Navbar } from '../../Pages/Home/Landing_page/Root_page/Header/Navbar'
import { Hero_section } from '../../Pages/Home/Landing_page/Root_page/Banner/Hero_section'
import { Outlet } from 'react-router-dom'
import  {Testimonial}  from '../../Pages/Home/Landing_page/Root_page/Testimonial/Testimonial'
import { Carousal } from '../../Pages/Carousal/Carousal'
import { About } from '../../Pages/About/About'
import { Footer } from '../../Pages/Footer/Footer'
import { LatestDonation } from '../../Pages/Donation/LatestDonation'




export const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero_section></Hero_section>
      <Outlet></Outlet>
      <Testimonial></Testimonial>
      <Carousal></Carousal>
      <LatestDonation></LatestDonation>
      <About></About>
      <Footer></Footer>
      

    </div>
  )
}
