import { StatisticItem } from "../StatisticItem/StatisticItem";
import "./Statistic.css";

export const Statistic = () => {
  return (
    <section className="statistic">
      <h2 className="statistic-title">
        Where creativity <br /> meets results
      </h2>
      <div className="statistics-container">
        <div className="statistics-content">
          <StatisticItem
            number="347"
            description="Complete projects"
            bgColor="#CFF5E7"
            className="stat-item item-green"
            icon="#"
          />
          <p className="statistic-text top-text">
            We supercharge businesses with stand out branding,
            conversion-focused websites, and content that truly engages +
            connects + converts.
          </p>
        </div>
        <div className="statistic-website">
          <StatisticItem
            number="1720"
            description="Website pages"
            bgColor="#FFB7A5"
            className="stat-item item-orange"
            icon="*"
          />
        </div>

        <div className="statistics-content">
          <p className="statistic-text bottom-text">
            We design exceptional brands, products, web apps, mobile apps,
            websites for startups and enterprises.
          </p>
          <StatisticItem
            number="31568"
            description="Working hours"
            bgColor="#BEE7FF"
            className="stat-item item-blue"
            icon="<"
          />
        </div>
      </div>
    </section>
  );
};
