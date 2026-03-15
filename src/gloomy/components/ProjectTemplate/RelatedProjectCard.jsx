import { NavLink } from "react-router-dom";
import "./ProjectTemplate.scss";

export const RelatedProjectCard = ({ route, image, title }) => {
  return (
    <NavLink className="related-project-card" to={route}>
      <img src={image} alt={title} />
      <div className="related-project-card__overlay">
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
};
