import './Portfolio.css'
import { useLanguage } from "../../i18n/LanguageContext";

export const PortfolioFilters = ({ categories, active, onChange }) => {
  const { t } = useLanguage();

  return (
    <div className="portfolio-filters">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {t(`portfolio.categories.${cat}`)}
        </button>
      ))}
    </div>
  );
};
