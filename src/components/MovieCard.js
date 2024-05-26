import React from 'react';
import '../styles/MovieCard.css';

function MovieCard({ title, cast, type, description, imageSrc, featured = true }) {
  const cardClass = featured ? "col-md-6" : "";
  return (
    <div className={cardClass}>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-auto custom-image-container">
          <img className="bd-placeholder-img" width="auto" height="250" src={`${process.env.REACT_APP_BASE_URL}/${imageSrc}`} alt={title} />
        </div>
        <div className="col p-4 d-flex flex-column position-static m-text-block">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{type}</strong>
          <h3 className="mb-0 m-title-text">{title}</h3>
          <div className="mb-1 m-cast-text">{cast}</div>
          <p className="card-text mb-auto text-body-secondary">{description}</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
            在线观看
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
