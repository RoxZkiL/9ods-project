import React, { useState } from 'react';
import TitleNews from './TitleNews';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CardsInfo from './CardsInfo';
import NewsCard from './NewsCard';
import LoadMoreButton from './LoadMoreButton';
import './styles/News.css';

const mainNews = {
  image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/11-09-2020_SFFD_forest-fire-01.jpg/image1170x530cropped.jpg',
  title: 'El cambio climático y la alta demanda de madera presionan cada vez más a los bosques',
  subtitle: 'Los bomberos de California y otras partes de la costa oeste de Estados Unidos luchan por contener los incendios forestales.',
  info: 'El calentamiento del planeta vuelve a esos ecosistemas más vulnerables a incendios y plagas, entre otros lastres. Además la producción mundial de madera se mantiene en niveles récord y se proyecta que aumente hasta un 49% para 2050, alerta un informe de la agencia para la alimentación y la agricultura..',
};

const allCardsData = [
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 1',
    message: 'Este es el mensaje de la tarjeta 1.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 2',
    message: 'Este es el mensaje de la tarjeta 2.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 3',
    message: 'Este es el mensaje de la tarjeta 3.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 4',
    message: 'Este es el mensaje de la tarjeta 4.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 5',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 6',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 7',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 8',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 9',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 10',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 11',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 12',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Título de la Tarjeta 13',
    message: 'Este es el mensaje de la tarjeta 5.',
  },
  // Añade más noticias si es necesario
];

const News = () => {
  const [visibleCards, setVisibleCards] = useState(3); // Mostrar 3 noticias inicialmente

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Cargar 3 más cada vez
  };

  return (
    <>
      <Header />
      <TitleNews />
      <main className='container-news'>
        <h1 className='main-tittle'>Lo más reciente</h1>
        <div className="main-news">
          <NewsCard 
            image={mainNews.image}
            title={mainNews.title}
            subtitle={mainNews.subtitle}
            info={mainNews.info}
          />
        </div>
        <h2 className='more-news'>Más Noticias</h2>
        <CardsInfo cardsData={allCardsData.slice(0, visibleCards)} />
        {visibleCards < allCardsData.length && (
          <LoadMoreButton onClick={loadMore} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default News;