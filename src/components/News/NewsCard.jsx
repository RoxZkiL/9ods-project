import React from 'react'
import './styles/NewsCard.css'

const NewsCard = ({ image, title, subtitle, info }) => {
    return (
      <div className="news-card">
        <div className="news-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>
          <h4 className="news-card-subtitle">{subtitle}</h4>
          <p className="news-card-info">{info}</p>
        </div>
      </div>
    );
  };
  
  export default NewsCard;