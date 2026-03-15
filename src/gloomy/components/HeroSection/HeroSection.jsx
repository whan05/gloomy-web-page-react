import { useEffect, useState } from "react";
import "./HeroSection.scss";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  const text = t("hero.title");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 60); // velocidad de escritura

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  return (
    <section className="hero">
      <h1 className="hero-title">
        {displayedText}
        <span className="cursor">|</span>
      </h1>

      <div className="hero-container">
        <button className="hero-button">
          <NavLink to="our-work">
            {t("hero.cta")} <span>→</span>
          </NavLink>
        </button>

      <div className="hero-right">
        <p>
          {t("hero.description")}
        </p>
      </div>
      </div>
    </section>
  );
};
