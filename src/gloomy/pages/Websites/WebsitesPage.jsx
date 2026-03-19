import React from 'react'
import { NavLink } from 'react-router-dom'
import { PortfolioCard } from '../../components/Portfolio/PortfolioCard'
import { useLanguage } from '../../i18n/LanguageContext'
import { getPortfolioItems } from '../../data/portfolioData'
import './WebsitesPage.scss'

export const WebsitesPage = () => {
  const { t } = useLanguage()
  const portfolioItems = getPortfolioItems(t)
  const websiteProjects = portfolioItems
    .filter((item) => ["websites", "branding", "design"].includes(item.category))
    .slice(0, 3)

  const serviceCards = [
    { id: "ux", label: t("websitesLanding.services.ux"), variant: "mint" },
    { id: "conversion", label: t("websitesLanding.services.conversion"), variant: "lavender" },
    { id: "development", label: t("websitesLanding.services.development"), variant: "peach" },
  ]

  return (
    <section className="websites-page">
      <div className="websites-page__hero">
        <h1>
          <span>✱</span>
          {t("websitesLanding.heroTitle")}
        </h1>
      </div>

      <div className="websites-page__intro">
        <h2>{t("websitesLanding.title")}</h2>
        <NavLink className="websites-page__cta" to="/contact">
          {t("websitesLanding.cta")} <span>→</span>
        </NavLink>
        <p className="websites-page__lead">{t("websitesLanding.lead")}</p>
        <p className="websites-page__body">{t("websitesLanding.body")}</p>
      </div>

      <div className="websites-page__services">
        <h2>{t("websitesLanding.servicesTitle")}</h2>
        <div className="websites-page__service-track">
          {serviceCards.map((card) => (
            <article
              className={`websites-page__service-card websites-page__service-card--${card.variant}`}
              key={card.id}
            >
              {card.label}
            </article>
          ))}
        </div>
        <p className="websites-page__services-body">{t("websitesLanding.servicesBody")}</p>
      </div>

      <div className="websites-page__projects">
        <h2>{t("websitesLanding.projectsTitle")}</h2>
        <div className="websites-page__projects-grid">
          {websiteProjects.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
