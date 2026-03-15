import { NavLink } from "react-router-dom";
import { Accordion } from "../Accordion/Accordion";
import { useLanguage } from "../../i18n/LanguageContext";
import { getFaqItems } from "../../data/faqData";
import { FaqItem } from "./FaqItem";
import "./Faq.css";

export const FaqSection = () => {
  const { t } = useLanguage();
  const faqItems = getFaqItems(t);

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-section__aside">
        <div className="faq-section__card">
          <span className="faq-section__icon" aria-hidden="true">?</span>
          <h2 id="faq-title">{t("faq.title")}</h2>
        </div>

        <div className="faq-section__cta">
          <p>{t("faq.support")}</p>
          <NavLink className="faq-section__button" to="/contact">
            {t("faq.cta")} <span>→</span>
          </NavLink>
        </div>
      </div>

      <div className="faq-section__content">
        <Accordion>
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              title={item.question}
              description={item.answer}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
