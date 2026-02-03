import './Portfolio.css'

export const PortfolioCard = ({ image, title, description }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} />

      <div className="portfolio-card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

