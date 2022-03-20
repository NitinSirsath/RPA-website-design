import React  from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const DefaultLayout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer companyname={'companyname'}/>
    </>
  )
}

export default DefaultLayout