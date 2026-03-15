import { ReviewCard } from "./ReviewCard";
import { ReviewBrandRow } from "./ReviewBrandRow";
import { useLanguage } from "../../i18n/LanguageContext";
import { getReviewItems, reviewBrands } from "../../data/reviewsData";
import "./Reviews.scss";

export const ReviewsSection = () => {
  const { t } = useLanguage();
  const reviews = getReviewItems(t);

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

      <ReviewBrandRow brands={reviewBrands} />
    </section>
  );
};
