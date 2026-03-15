import { NavLink } from "react-router-dom";
import './Portfolio.scss'

export const PortfolioCard = ({ image, title, description, route }) => {
  return (
    <NavLink className="portfolio-card" to={route}>
      <img src={image} alt={title} />

      <div className="portfolio-card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};
