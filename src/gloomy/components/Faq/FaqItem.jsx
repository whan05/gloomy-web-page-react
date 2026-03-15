import "./Faq.scss";

export const FaqItem = ({ title, description, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button className="faq-item__header" onClick={onToggle}>
        <h3>{title}</h3>
        <span className="faq-item__toggle">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="faq-item__content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
