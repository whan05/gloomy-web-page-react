import { NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./AccordionItem.scss";

export const AccordionItem = ({
  title,
  icon,
  color,
  description,
  isOpen,
  onToggle,
  route
}) => {
  const { t } = useLanguage();

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
            <NavLink to={route}>{t("common.readMore")} →</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};
