import React from 'react'
import { HeroSection, ServicesSection, Statistic, Mission, Portfolio } from '../../components'
import { banner } from '../../../assets/images'

import './HomePage.css'

export const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <div className="banner-container">
        <img src={banner} alt="banner image" />
      </div>
      <div className="statistics-container">
        <Statistic/>
      </div>
      <div className="out-services-section">
        <ServicesSection/>
      </div>
      <div className="mission-section">
        <Mission/>
      </div>
      <div className="portfolio-section">
        <Portfolio/>
      </div>
    </div>
  )
}
