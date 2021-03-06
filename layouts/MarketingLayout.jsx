import * as React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const MarketingLayout = ({children}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default MarketingLayout