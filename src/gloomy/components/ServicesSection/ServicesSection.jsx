import { Accordion, AccordionItem } from '../';
import { useLanguage } from '../../i18n/LanguageContext';
import './ServicesSection.scss'

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="services">
      <h2>
        {t("services.title").split(" ").slice(0, 1).join("")} <br /> {t("services.title").split(" ").slice(1).join(" ")}
      </h2>

      <Accordion>
        <AccordionItem
          title={t("services.items.websites.title")}
          icon="<"
          color="#C9F5D9"
          description={t("services.items.websites.description")}
          route="/websites"
        />

        <AccordionItem
          title={t("services.items.marketing.title")}
          icon="#"
          color="#FFB6A0"
          description={t("services.items.marketing.description")}
          route="/services"
        />

        <AccordionItem
          title={t("services.items.branding.title")}
          icon="✱"
          color="#BDE4FF"
          description={t("services.items.branding.description")}
          route="/services"
        />

        <AccordionItem
          title={t("services.items.design.title")}
          icon="&"
          color="#C6C8FF"
          description={t("services.items.design.description")}
          route="/design"
        />

        <AccordionItem
          title={t("services.items.strategy.title")}
          icon="{"
          color="#FFF9A6"
          description={t("services.items.strategy.description")}
          route="/services"
        />
      </Accordion>
    </section>
  );
}
