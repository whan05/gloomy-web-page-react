import { StatisticItem } from "../StatisticItem/StatisticItem";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Statistic.scss";

export const Statistic = () => {
  const { t } = useLanguage();

  return (
    <section className="statistic">
      <div className="statistic-shell">
        <h2 className="statistic-title">
          {t("statistic.title")}
        </h2>
        <div className="statistics-container">
          <div className="statistics-content">
            <StatisticItem
              number="347"
              description={t("statistic.items.completeProjects")}
              bgColor="#CFF5E7"
              className="stat-item item-green"
              icon="#"
            />
            <p className="statistic-text top-text">{t("statistic.topText")}</p>
          </div>
          <div className="statistic-website">
            <StatisticItem
              number="1720"
              description={t("statistic.items.websitePages")}
              bgColor="#FFB7A5"
              className="stat-item item-orange"
              icon="*"
            />
          </div>

          <div className="statistics-content">
            <p className="statistic-text bottom-text">{t("statistic.bottomText")}</p>
            <StatisticItem
              number="31568"
              description={t("statistic.items.workingHours")}
              bgColor="#BEE7FF"
              className="stat-item item-blue"
              icon="<"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
