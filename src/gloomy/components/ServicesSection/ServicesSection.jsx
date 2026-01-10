import { Accordion, AccordionItem } from '../';
import './ServicesSection.css'

export const ServicesSection = () => {
  return (
    <section className="services">
      <h2>
        Our <br /> services
      </h2>

      <Accordion>
        <AccordionItem
          title="Websites"
          icon="<"
          color="#C9F5D9"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        <AccordionItem
          title="Marketing"
          icon="#"
          color="#FFB6A0"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        <AccordionItem
          title="Branding"
          icon="✱"
          color="#BDE4FF"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        <AccordionItem
          title="Design"
          icon="&"
          color="#C6C8FF"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        <AccordionItem
          title="Strategy"
          icon="{"
          color="#FFF9A6"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />
      </Accordion>
    </section>
  );
}
