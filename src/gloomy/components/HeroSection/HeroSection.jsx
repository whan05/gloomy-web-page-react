import { useEffect, useState } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const TEXT = "We build websites & brands people love";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + TEXT[index]);
        setIndex((prev) => prev + 1);
      }, 60); // velocidad de escritura

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="hero">
      <h1 className="hero-title">
        {displayedText}
        <span className="cursor">|</span>
      </h1>

      <div className="hero-container">
        <button className="hero-button">
          <Link to="our-work">
            View Our Work <span>→</span>
          </Link>
        </button>

      <div className="hero-right">
        <p>
          We’re a team of creative web designers and skilled developers who
          relish in creating purposeful digital experiences that people fall in
          love with.
        </p>
      </div>
      </div>
    </section>
  );
};
