import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation, ScrollToTopButton } from '../../components'
import { Footer } from '../../components/Footer/Footer'

export const MainLayout = () => {
  return (
    <div>
        <Navigation/>
        <div>
            <Outlet/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
        <ScrollToTopButton/>
    </div>
  )
}
