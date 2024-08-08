import React from 'react'
import './styles/Card.css'

const Card = ({ image, title, message }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-message">{message}</p>
        </div>
      </div>
    );
  };

export default Card;