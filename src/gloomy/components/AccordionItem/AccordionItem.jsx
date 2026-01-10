import { NavLink } from "react-router-dom";
import "./AccordionItem.css";

export const AccordionItem = ({
  title,
  icon,
  color,
  description,
  isOpen,
  onToggle,
  route
}) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        <div className="accordion-title">
          <div className="accordion-icon" style={{ backgroundColor: color }}>
            {icon}
          </div>

          <h3>{title}</h3>
        </div>

        <span className="accordion-toggle">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          <p>{description}</p>

          <button
            className="accordion-readmore"
            style={{ backgroundColor: color }}
          >
            <NavLink to={route}>Read more →</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};
