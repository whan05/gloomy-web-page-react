import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ScrollToTopButton.scss";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-top-button ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label={t("common.scrollTop")}
    >
      <i className="bx bx-chevron-up"></i>
    </button>
  );
};
