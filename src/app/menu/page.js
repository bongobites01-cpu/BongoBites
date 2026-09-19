import Navbar from '@/components/common/Navbar'
import MenuHero from '@/components/menu/MenuHero'
import FullMenu from '@/components/menu/FullMenu'
import React from 'react'
import Footer from '@/components/common/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <MenuHero/>
      <FullMenu/>
      <Footer/>
    </div>
  )
}

export default page
