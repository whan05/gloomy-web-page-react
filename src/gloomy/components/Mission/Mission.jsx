import { mission } from "../../../assets/images";
import "./Mission.css";

export const Mission = () => {
  return (
    <section className="mission" aria-labelledby="mission-title">
      <div
        className="mission-image"
        role="img"
        aria-label="Creative team workspace representing the agency mission"
        style={{ backgroundImage: `url(${mission})` }}
      >
        <div className="mission-content">
          <h2 id="mission-title">
            Our mission is simple yet profound: to elevate brands, engage
            audiences, and drive tangible growth.
          </h2>
        </div>
      </div>
    </section>
  );
};
