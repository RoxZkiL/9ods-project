import React from 'react';
import Card from './Card';

const CardsInfo = ({ cardsData }) => {
  return (
    <div className="cards-info">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          message={card.message}
        />
      ))}
    </div>
  );
};

export default CardsInfo;