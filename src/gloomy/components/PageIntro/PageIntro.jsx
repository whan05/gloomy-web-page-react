import { useLanguage } from "../../i18n/LanguageContext";

export const PageIntro = ({ pageKey }) => {
  const { t } = useLanguage();

  return (
    <section className="page-intro">
      <div className="page-intro__content">
        <p className="page-intro__eyebrow">{t("nav.brand")}</p>
        <h1>{t(`pages.${pageKey}.title`)}</h1>
        <p>{t(`pages.${pageKey}.description`)}</p>
      </div>
    </section>
  );
};
