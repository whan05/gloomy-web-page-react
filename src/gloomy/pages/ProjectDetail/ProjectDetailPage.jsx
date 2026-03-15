import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { getPortfolioItemBySlug, getPortfolioItems } from "../../data/portfolioData";
import { ProjectTemplate } from "../../components/ProjectTemplate/ProjectTemplate";

export const ProjectDetailPage = () => {
  const { projectSlug } = useParams();
  const { t } = useLanguage();
  const portfolioItems = getPortfolioItems(t);
  const project = getPortfolioItemBySlug(t, projectSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectSlug]);

  if (!project) {
    return <Navigate to="/our-work" replace />;
  }

  const currentProjectIndex = portfolioItems.findIndex(
    (item) => item.slug === project.slug
  );
  const previousProject =
    portfolioItems[
      (currentProjectIndex - 1 + portfolioItems.length) % portfolioItems.length
    ];
  const nextProject =
    portfolioItems[(currentProjectIndex + 1) % portfolioItems.length];
  const relatedProjects = portfolioItems
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <ProjectTemplate
      project={project}
      previousProject={previousProject}
      relatedProjects={relatedProjects}
      nextProject={nextProject}
    />
  );
};
