import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PortfolioCard } from '../../components/Portfolio/PortfolioCard'
import { PortfolioFilters } from '../../components/Portfolio/PortfolioFilters'
import { ReviewBrandRow } from '../../components/Reviews/ReviewBrandRow'
import { getPortfolioItems, portfolioCategoryIds } from '../../data/portfolioData'
import { getReviewItems, reviewBrands } from '../../data/reviewsData'
import { useLanguage } from '../../i18n/LanguageContext'
import './OurWorkPage.scss'

const INITIAL_VISIBLE_ITEMS = 3
const ITEMS_PER_LOAD = 3

export const OurWorkPage = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS)
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const portfolioItems = getPortfolioItems(t)
  const reviews = getReviewItems(t)

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    setVisibleItems(INITIAL_VISIBLE_ITEMS)
  }, [activeCategory])

  const visiblePortfolioItems = filteredItems.slice(0, visibleItems)
  const canLoadMore = visibleItems < filteredItems.length
  const activeReview = reviews[activeReviewIndex]

  const showPreviousReview = () => {
    setActiveReviewIndex((currentIndex) =>
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
    )
  }

  const showNextReview = () => {
    setActiveReviewIndex((currentIndex) =>
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <section className="our-work-page">
      <div className="our-work-page__top">
        <div className="our-work-page__headline">
          <h1>{t("ourWorkLanding.title")}</h1>
          <NavLink className="our-work-page__cta" to="/contact">
            {t("ourWorkLanding.cta")} <span>→</span>
          </NavLink>
        </div>

        <p className="our-work-page__intro-copy">{t("ourWorkLanding.intro")}</p>
      </div>

      <div className="our-work-page__portfolio-shell">
        <PortfolioFilters
          categories={portfolioCategoryIds}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="our-work-page__grid">
          {visiblePortfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>

        {canLoadMore && (
          <div className="our-work-page__load-more">
            <button
              type="button"
              className="our-work-page__load-more-button"
              onClick={() =>
                setVisibleItems(
                  (currentVisibleItems) => currentVisibleItems + ITEMS_PER_LOAD
                )
              }
            >
              {t("portfolio.loadMore")}
            </button>
          </div>
        )}
      </div>

      <div className="our-work-page__reviews">
        <div className="our-work-page__reviews-intro">
          <h2>{t("ourWorkLanding.reviewsTitle")}</h2>
        </div>

        <div className="our-work-page__review-stage">
          <button
            type="button"
            className="our-work-page__review-nav"
            onClick={showPreviousReview}
            aria-label={t("ourWorkLanding.previousReview")}
          >
            ‹
          </button>

          <article className="our-work-page__review-card">
            <header className="our-work-page__review-header">
              <h3>{activeReview.name}</h3>
              <p>{activeReview.role}</p>
            </header>

            <p className="our-work-page__review-content">{activeReview.content}</p>

            <div className="our-work-page__review-quote" aria-hidden="true">
              <i className='bx bxs-quote-alt-right'></i>
            </div>
          </article>

          <button
            type="button"
            className="our-work-page__review-nav"
            onClick={showNextReview}
            aria-label={t("ourWorkLanding.nextReview")}
          >
            ›
          </button>
        </div>

        <ReviewBrandRow brands={reviewBrands} />
      </div>
    </section>
  )
}
