import React from "react";
import './card.css';

const defaultImage = process.env.PUBLIC_URL + '/logoContatti.PNG';

function Card({ image = defaultImage, title, subtitle }) {
  return (
    <div className="card">
      <div className="card-content">
        <img className="card-img" src={image} alt={title || 'Card'} />
        {(title || subtitle) && (
          <div className="card-text">
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
