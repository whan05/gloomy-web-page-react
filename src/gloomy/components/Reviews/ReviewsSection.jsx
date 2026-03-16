import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { ReviewBrandRow } from "./ReviewBrandRow";
import { useLanguage } from "../../i18n/LanguageContext";
import { getReviewItems, reviewBrands } from "../../data/reviewsData";
import "./Reviews.scss";

export const ReviewsSection = () => {
  const { t } = useLanguage();
  const reviews = getReviewItems(t);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const activeReview = reviews[activeReviewIndex];

  const showPreviousReview = () => {
    setActiveReviewIndex((currentIndex) =>
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
    );
  };

  const showNextReview = () => {
    setActiveReviewIndex((currentIndex) =>
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews__intro">
        <h2 id="reviews-title">{t("reviews.title")}</h2>
        <p>{t("reviews.description")}</p>
      </div>

      <div className="reviews__grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      <div className="reviews__carousel">
        <div className="reviews__carousel-stage">
          <button
            type="button"
            className="reviews__carousel-nav"
            onClick={showPreviousReview}
            aria-label={t("reviews.previousReview")}
          >
            ‹
          </button>

          <ReviewCard {...activeReview} />

          <button
            type="button"
            className="reviews__carousel-nav"
            onClick={showNextReview}
            aria-label={t("reviews.nextReview")}
          >
            ›
          </button>
        </div>
      </div>

      <ReviewBrandRow brands={reviewBrands} />
    </section>
  );
};
