import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeaturedCarousel from '../Components/FeaturedCarousel'
import BenefitsSection from '../Components/BenefitsSection'
import HowItWorksSection from '../Components/HowItWorksSection'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturedCarousel/>
      <BenefitsSection/>
      <HowItWorksSection/>
      <Footer/>
    </div>
  )
}

export default Dashboard