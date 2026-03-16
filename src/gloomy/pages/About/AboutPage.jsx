import React, { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { banner, projectCover } from '../../../assets/images'
import { Mission, ReviewsSection } from '../../components'
import { useLanguage } from '../../i18n/LanguageContext'
import './AboutPage.scss'

export const AboutPage = () => {
  const { t } = useLanguage()
  const storyItems = useMemo(
    () => [
      t("aboutPage.storyItems.year2020"),
      t("aboutPage.storyItems.year2021"),
      t("aboutPage.storyItems.year2022"),
      t("aboutPage.storyItems.year2023"),
      t("aboutPage.storyItems.year2024"),
    ],
    [t]
  )
  const [activeStoryIndex, setActiveStoryIndex] = useState(1)
  const fitItems = t("aboutPage.fitItems")

  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div
          className="about-page__hero-media"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.4)), url(${banner})` }}
        >
          <div className="about-page__hero-inner">
            <div className="about-page__hero-copy">
              <p className="about-page__eyebrow">{t("aboutPage.eyebrow")}</p>

              <h1>
                {t("aboutPage.titleStart")} <span>{t("aboutPage.titleAccentOne")}</span>{" "}
                {t("aboutPage.titleMiddle")} <span>{t("aboutPage.titleAccentTwo")}</span>
              </h1>

              <NavLink className="about-page__hero-cta" to="/contact">
                {t("aboutPage.cta")} <span>→</span>
              </NavLink>
            </div>

            <p className="about-page__hero-body">{t("aboutPage.heroBody")}</p>
          </div>
        </div>
      </section>

      <section className="about-page__editorial">
        <div className="about-page__editorial-grid">
          <div className="about-page__editorial-copy about-page__editorial-copy--lead">
            <h2>{t("aboutPage.introTitle")}</h2>
            <p>{t("aboutPage.introBody")}</p>
          </div>

          <div className="about-page__editorial-image-shell">
            <img src={projectCover} alt="" />
          </div>

          <div className="about-page__editorial-image-shell about-page__editorial-image-shell--offset">
            <img src={banner} alt="" />
          </div>

          <div className="about-page__editorial-copy about-page__editorial-copy--aside">
            <p>{t("aboutPage.approachBody")}</p>
          </div>
        </div>
      </section>

      <section className="about-page__story" aria-labelledby="about-story-title">
        <div className="about-page__story-shell">
          <h2 id="about-story-title">{t("aboutPage.storyTitle")}</h2>

          <div className="about-page__story-list">
            {storyItems.map((item, index) => {
              const isOpen = index === activeStoryIndex

              return (
                <article
                  className={`about-page__story-item${isOpen ? " is-open" : ""}`}
                  key={item.year}
                >
                  <button
                    type="button"
                    className="about-page__story-trigger"
                    onClick={() => setActiveStoryIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.year}</span>
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="about-page__story-panel">
                      <div className="about-page__story-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <div className="about-page__story-image">
                        <img src={projectCover} alt="" />
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-page__mission">
        <Mission />
      </section>

      <section className="about-page__reviews">
        <ReviewsSection />
      </section>

      <section className="about-page__fit">
        <div className="about-page__fit-shell">
          <div className="about-page__fit-card">
            <h2>{t("aboutPage.fitTitle")}</h2>
          </div>

          <ul className="about-page__fit-list">
            {fitItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
