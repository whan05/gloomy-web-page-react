import './Portfolio.css'

export const PortfolioFilters = ({ categories, active, onChange }) => {
  return (
    <div className="portfolio-filters">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
