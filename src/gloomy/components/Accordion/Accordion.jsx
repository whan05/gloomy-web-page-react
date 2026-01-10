
import { useState, Children, cloneElement } from "react";
import './Accordion.css'

export const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="accordion">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: activeIndex === index,
          onToggle: () => setActiveIndex(activeIndex === index ? null : index),
        })
      )}
    </div>
  );
};
