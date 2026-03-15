import "./Portfolio.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const PortfolioTitle = () => {
  const { t } = useLanguage();

  return (
    <div className="portfolio-title-wrapper">
      <div className="portfolio-title-track">
        <span>* {t("portfolio.marquee")} *</span>
        <span>* {t("portfolio.marquee")} *</span>
        <span>* {t("portfolio.marquee")} *</span>
        <span>* {t("portfolio.marquee")} *</span>
      </div>
    </div>
  );
};

