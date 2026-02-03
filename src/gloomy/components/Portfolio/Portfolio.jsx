import { useState } from "react";
import "./Portfolio.css";
import {PortfolioTitle} from "./PortfolioTitle";
import {PortfolioFilters} from "./PortfolioFilters";
import {PortfolioCard} from "./PortfolioCard";
import { portfolioItems, categories } from "../../data/portfolioData";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All projects");

  const filteredItems =
    activeCategory === "All projects"
      ? portfolioItems
      : portfolioItems.filter(
          item => item.category === activeCategory
        );

  return (
    <section className="portfolio">
      <PortfolioTitle />

      <PortfolioFilters
        categories={categories}
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


