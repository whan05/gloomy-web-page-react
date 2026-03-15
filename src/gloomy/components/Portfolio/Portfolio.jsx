import { useEffect, useState } from "react";
import "./Portfolio.scss";
import {PortfolioTitle} from "./PortfolioTitle";
import {PortfolioFilters} from "./PortfolioFilters";
import {PortfolioCard} from "./PortfolioCard";
import { getPortfolioItems, portfolioCategoryIds } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

const INITIAL_VISIBLE_ITEMS = 3;
const ITEMS_PER_LOAD = 3;

export const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);
  const portfolioItems = getPortfolioItems(t);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          item => item.category === activeCategory
        );

  useEffect(() => {
    setVisibleItems(INITIAL_VISIBLE_ITEMS);
  }, [activeCategory]);

  const visiblePortfolioItems = filteredItems.slice(0, visibleItems);
  const canLoadMore = visibleItems < filteredItems.length;

  return (
    <section className="portfolio">
      <PortfolioTitle />

      <PortfolioFilters
        categories={portfolioCategoryIds}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="portfolio-grid">
        {visiblePortfolioItems.map(item => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>

      {canLoadMore && (
        <div className="portfolio-load-more">
          <button
            type="button"
            className="portfolio-load-more__button"
            onClick={() =>
              setVisibleItems((currentVisibleItems) =>
                currentVisibleItems + ITEMS_PER_LOAD
              )
            }
          >
            {t("portfolio.loadMore")}
          </button>
        </div>
      )}
    </section>
  );
};
