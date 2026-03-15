import "./Reviews.css";

export const ReviewCard = ({ name, role, content }) => {
  return (
    <article className="review-card">
      <header className="review-card__header">
        <h3>{name}</h3>
        <p>{role}</p>
      </header>

      <p className="review-card__content">{content}</p>

      <div className="review-card__quote" aria-hidden="true">
        <i className='bx bxs-quote-alt-right'></i>
      </div>
    </article>
  );
};
