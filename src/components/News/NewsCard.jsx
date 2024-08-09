import React from 'react'
import './styles/NewsCard.css'

const NewsCard = ({ image, title, subtitle, info, date, topic }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <div className="news-card-mini-subtitle">
          <span className="news-card-date">{date}</span> | <span className="news-card-topic">{topic}</span>
        </div>
        <p className="news-card-subtitle">{subtitle}</p>
        <p className="news-card-info">{info}</p>
      </div>
    </div>
  );
};

export default NewsCard;