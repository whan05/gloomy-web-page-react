import { NavLink } from "react-router-dom";
import { RelatedProjectCard } from "./RelatedProjectCard";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ProjectTemplate.scss";

export const ProjectTemplate = ({
  project,
  previousProject,
  relatedProjects,
  nextProject,
}) => {
  const { t } = useLanguage();

  return (
    <section className="project-template">
      <div className="project-template__hero">
        <h1>{project.title}</h1>
        <a
          className="project-template__visit"
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t("portfolio.detail.visitWebsite")} <span>→</span>
        </a>
      </div>

      <div className="project-template__cover">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-template__summary">
        <p>{project.summary}</p>
      </div>

      <div className="project-template__meta">
        <div>
          <span>{t("portfolio.detail.labels.date")}</span>
          <p>{project.date}</p>
        </div>
        <div>
          <span>{t("portfolio.detail.labels.client")}</span>
          <p>{project.client}</p>
        </div>
        <div>
          <span>{t("portfolio.detail.labels.services")}</span>
          <p>{project.servicesLabel}</p>
        </div>
        <div>
          <span>{t("portfolio.detail.labels.artDirector")}</span>
          <p>{project.artDirector}</p>
        </div>
      </div>

      <div className="project-template__gallery">
        <div className="project-template__gallery-card">
          <img src={project.galleryPrimary} alt={`${project.title} preview 1`} />
        </div>
        <div className="project-template__gallery-card">
          <img src={project.gallerySecondary} alt={`${project.title} preview 2`} />
        </div>
      </div>

      <div className="project-template__brief">
        <h2>{t("portfolio.detail.projectBrief")}</h2>
        <p className="project-template__brief-lead">{project.briefLead}</p>
        <p className="project-template__brief-body">{project.briefBody}</p>

        <div className="project-template__socials" aria-label="Project social links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <i className="bx bxl-pinterest"></i>
          </a>
          <a href="https://tumblr.com" target="_blank" rel="noreferrer" aria-label="Tumblr">
            <i className="bx bxl-tumblr"></i>
          </a>
        </div>

        <div className="project-template__project-nav">
          {previousProject && (
            <NavLink className="project-template__project-link is-previous" to={previousProject.route}>
              <i className="bx bx-chevron-left"></i>
              <div>
                <span>{t("portfolio.detail.previousProject")}</span>
                <strong>{previousProject.title}</strong>
              </div>
            </NavLink>
          )}

          {nextProject && (
            <NavLink className="project-template__project-link is-next" to={nextProject.route}>
              <div>
                <span>{t("portfolio.detail.nextProject")}</span>
                <strong>{nextProject.title}</strong>
              </div>
              <i className="bx bx-chevron-right"></i>
            </NavLink>
          )}
        </div>
      </div>

      <div className="project-template__related">
        <h2>{t("portfolio.detail.relatedProjects")}</h2>
        <div className="project-template__related-grid">
          {relatedProjects.map((item) => (
            <RelatedProjectCard
              key={item.id}
              route={item.route}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
