import React from 'react'
import { HeroSection, ServicesSection, Statistic, Mission, Portfolio, ReviewsSection, FaqSection } from '../../components'
import { banner } from '../../../assets/images'
import { useLanguage } from '../../i18n/LanguageContext'

import './HomePage.scss'

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection/>
      <div className="banner-container">
        <img src={banner} alt={t("home.bannerAlt")} />
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
      <div className="reviews-section">
        <ReviewsSection/>
      </div>
      <div className="faq-home-section">
        <FaqSection/>
      </div>
    </div>
  )
}
