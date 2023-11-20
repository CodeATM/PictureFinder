import Banner from '@Components/Banner'
import Categories from '@Components/Categories'
import ImagesContainer from '@Components/ImagesContainer'
import Navbar from '@Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      {/* // <Categories/> */}
      <ImagesContainer/>
    </div>
  )
}

export default page