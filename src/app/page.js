import Navbar from '@/components/common/Navbar'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import React from 'react'
import ChooseBongoBites from '@/components/home/ChooseBongoBites'
import SpecialMenu from '@/components/home/SpecialMenu'
import OurRestaurant from '@/components/home/OurRestaurant'
import CustomerStay from '@/components/home/CustomerStay'

import Footer from '@/components/common/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <SpecialMenu/>
      <ChooseBongoBites/>
      <OurRestaurant/>
      <CustomerStay/>
      <Footer/>
    </div>
  )
}

export default page
