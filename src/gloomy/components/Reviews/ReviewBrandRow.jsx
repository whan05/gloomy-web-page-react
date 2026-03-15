import "./Reviews.css";

export const ReviewBrandRow = ({ brands }) => {
  return (
    <div className="review-brands" aria-label="Client brands">
      {brands.map((brand) => (
        <article className={`review-brand review-brand--${brand.id}`} key={brand.id}>
          <h3>{brand.name}</h3>
          <p>{brand.sublabel}</p>
        </article>
      ))}
    </div>
  );
};
