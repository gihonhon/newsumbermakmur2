import React from 'react'
import HeroSection from '../components/Hero/Hero'
import AboutSection from '../components/Aboutus/AboutUs'
import WhyUsSection from '../components/Whyus/WhyUs'
import GallerySection from '../components/Gallery/GalleryProduct'
import ContactSection from '../components/ContactUs/ContactUs'
import SocialMediaSection from '../components/SocialMedia/SocialMediaSection'
import LocationSection from '../components/Location/OurLocation'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <WhyUsSection/>
        <GallerySection/>
        <ContactSection/>
        <SocialMediaSection/>
        <LocationSection/>
    </>
  )
}

export default Home