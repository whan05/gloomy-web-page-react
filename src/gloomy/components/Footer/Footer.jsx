import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const navLinks = t("footer.navLinks");
  const serviceLinks = t("footer.serviceLinks");
  const socials = t("footer.socials");

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-padding">
          <div className="footer-main">
            <h2>
              {t("footer.headline")}
              <span className="footer-link"> {t("footer.cta")}</span>
            </h2>
          </div>

          <div className="footer-info">
            <div className="footer-contact">
              <p>{t("footer.addressLine1")}</p>
              <p>{t("footer.addressLine2")}</p>
              <a  className="footer-email" href="mailto:info@domain.tld">info@domain.tld</a>
              <p className="phone">+1 215-606-0391</p>
            </div>

            <div className="footer-links">
              <div>
                {navLinks.map((label) => (
                  <a href="#" key={label}>{label}</a>
                ))}
              </div>

              <div>
                {serviceLinks.map((label) => (
                  <a href="#" key={label}>{label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-socials">
          <button className="social facebook">{socials[0]}</button>
          <button className="social youtube">{socials[1]}</button>
          <button className="social instagram">{socials[2]}</button>
          <button className="social telegram">{socials[3]}</button>
          <button className="social twitter">{socials[4]}</button>
        </div>
      </div>

      <div className="footer-bottom">{t("common.copyright")}</div>
    </footer>
  );
};
