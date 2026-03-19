import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../../assets/images";
import { NavLink } from "react-router-dom";
import { MenuModal } from "../";
import { useLanguage } from "../../i18n/LanguageContext";

import "./Navigation.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation">
      <div className="logo-section">
        <NavLink className="logo-btn" to="/">
          <img className="logo" src={logo} alt={t("nav.logoAlt")} />
          <p className="logo-text">{t("nav.brand")}</p>
        </NavLink>
      </div>
      <nav className="horizotal-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/websites"
        >
          {t("nav.items.websites")}
        </NavLink>
        <NavLink
           className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/design">
          {t("nav.items.design")}
        </NavLink>
        <NavLink
           className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/branding">
          {t("nav.items.branding")}
        </NavLink>
        <NavLink 
           className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/our-work">
          {t("nav.items.ourWork")}
        </NavLink>
      </nav>
      <div className="navigation-actions">
        <div className="language-picker">
          <span>{t("language.label")}</span>
          <div className="language-picker-control" ref={languageMenuRef}>
            <button
              type="button"
              className="language-picker-trigger"
              onClick={() => setIsLanguageMenuOpen((current) => !current)}
              aria-label={t("language.label")}
              aria-haspopup="listbox"
              aria-expanded={isLanguageMenuOpen}
            >
              <span>{t(`language.options.${language}`)}</span>
              <span className={`language-picker-chevron ${isLanguageMenuOpen ? "open" : ""}`}>
                ▾
              </span>
            </button>

            {isLanguageMenuOpen && (
              <div className="language-picker-menu" role="listbox" aria-label={t("language.label")}>
                {["en", "es"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={language === option}
                    className={`language-picker-option ${language === option ? "active" : ""}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setLanguage(option);
                      setIsLanguageMenuOpen(false);
                    }}
                  >
                    {t(`language.options.${option}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="menu-btn" aria-label={t("common.openMenu")}>
          <i className="bx bx-menu"></i>
        </button>
      </div>
      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
