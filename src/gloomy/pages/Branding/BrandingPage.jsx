import React from 'react'
import { NavLink } from 'react-router-dom'
import { PortfolioCard } from '../../components/Portfolio/PortfolioCard'
import { useLanguage } from '../../i18n/LanguageContext'
import { getPortfolioItems } from '../../data/portfolioData'
import './BrandingPage.scss'

export const BrandingPage = () => {
  const { t } = useLanguage()
  const portfolioItems = getPortfolioItems(t)
  const designProjects = portfolioItems
    .filter((item) => ["design", "branding", "strategy"].includes(item.category))
    .slice(0, 3)

  const serviceCards = [
    { id: "identity", label: t("brandingLanding.services.identity"), variant: "mint" },
    { id: "guidelines", label: t("brandingLanding.services.guidelines"), variant: "lavender" },
    { id: "systems", label: t("brandingLanding.services.systems"), variant: "peach" },
    { id: "ui", label: t("brandingLanding.services.ui"), variant: "blue" },
  ]

  return (
    <section className="design-page">
      <div className="design-page__hero">
        <h1>
          <span>✱</span>
          {t("brandingLanding.heroTitle")}
        </h1>
      </div>

      <div className="design-page__intro">
        <h2>{t("brandingLanding.title")}</h2>
        <NavLink className="design-page__cta" to="/contact">
          {t("brandingLanding.cta")} <span>→</span>
        </NavLink>
        <p className="design-page__lead">{t("brandingLanding.lead")}</p>
        <p className="design-page__body">{t("brandingLanding.body")}</p>
      </div>

      <div className="design-page__services">
        <h2>{t("brandingLanding.servicesTitle")}</h2>
        <div className="design-page__service-track">
          {serviceCards.map((card) => (
            <article
              className={`design-page__service-card design-page__service-card--${card.variant}`}
              key={card.id}
            >
              {card.label}
            </article>
          ))}
        </div>
        <p className="design-page__services-body">{t("brandingLanding.servicesBody")}</p>
      </div>

      <div className="design-page__projects">
        <h2>{t("brandingLanding.projectsTitle")}</h2>
        <div className="design-page__projects-grid">
          {designProjects.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
