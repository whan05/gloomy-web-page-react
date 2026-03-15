import { mission } from "../../../assets/images";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Mission.scss";

export const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="mission" aria-labelledby="mission-title">
      <div
        className="mission-image"
        role="img"
        aria-label={t("mission.imageAlt")}
        style={{ backgroundImage: `url(${mission})` }}
      >
        <div className="mission-content">
          <h2 id="mission-title">
            {t("mission.title")}
          </h2>
        </div>
      </div>
    </section>
  );
};
