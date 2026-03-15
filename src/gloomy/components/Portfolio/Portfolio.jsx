import { useState } from "react";
import "./Portfolio.css";
import {PortfolioTitle} from "./PortfolioTitle";
import {PortfolioFilters} from "./PortfolioFilters";
import {PortfolioCard} from "./PortfolioCard";
import { getPortfolioItems, portfolioCategoryIds } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

export const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const portfolioItems = getPortfolioItems(t);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          item => item.category === activeCategory
        );

  return (
    <section className="portfolio">
      <PortfolioTitle />

      <PortfolioFilters
        categories={portfolioCategoryIds}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

