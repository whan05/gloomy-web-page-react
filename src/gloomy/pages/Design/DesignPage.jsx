import React from 'react'
import { NavLink } from 'react-router-dom'
import { PortfolioCard } from '../../components/Portfolio/PortfolioCard'
import { useLanguage } from '../../i18n/LanguageContext'
import { getPortfolioItems } from '../../data/portfolioData'
import './DesignPage.scss'

export const DesignPage = () => {
  const { t } = useLanguage()
  const portfolioItems = getPortfolioItems(t)
  const designProjects = portfolioItems
    .filter((item) => ["design", "branding", "websites"].includes(item.category))
    .slice(0, 3)

  const serviceCards = [
    { id: "identity", label: t("designLanding.services.identity"), variant: "mint" },
    { id: "guidelines", label: t("designLanding.services.guidelines"), variant: "lavender" },
    { id: "systems", label: t("designLanding.services.systems"), variant: "peach" },
    { id: "ui", label: t("designLanding.services.ui"), variant: "blue" },
  ]

  return (
    <section className="design-page">
      <div className="design-page__hero">
        <h1>
          <span>✱</span>
          {t("designLanding.heroTitle")}
        </h1>
      </div>

      <div className="design-page__intro">
        <h2>{t("designLanding.title")}</h2>
        <NavLink className="design-page__cta" to="/contact">
          {t("designLanding.cta")} <span>→</span>
        </NavLink>
        <p className="design-page__lead">{t("designLanding.lead")}</p>
        <p className="design-page__body">{t("designLanding.body")}</p>
      </div>

      <div className="design-page__services">
        <h2>{t("designLanding.servicesTitle")}</h2>
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
        <p className="design-page__services-body">{t("designLanding.servicesBody")}</p>
      </div>

      <div className="design-page__projects">
        <h2>{t("designLanding.projectsTitle")}</h2>
        <div className="design-page__projects-grid">
          {designProjects.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
