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
  info: 'El calentamiento del planeta vuelve a esos ecosistemas más vulnerables a incendios y plagas, entre otros lastres. Además la producción mundial de madera se mantiene en niveles récord y se proyecta que aumente hasta un 49% para 2050, alerta un informe de la agencia para la alimentación y la agricultura.',
  date: '08 de Agosto, 2024',
  topic: 'Medio Ambiente',
};

const allCardsData = [
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/11-07-2024_Unsplash_India.jpg/image1170x530cropped.jpg',
    title: 'La población mundial llegará a un máximo de 10.300 millones en este siglo',
    message: 'La población mundial alcanzó casi los 8.200 millones a mediados de 2024 y se prevé que siga creciendo hasta la segunda mitad de este siglo.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/21-07-2023-UN-News-SDG-Nigeria-02.jpg/image1170x530cropped.jpg',
    title: 'Solo el 17% de los Objetivos de Desarrollo van por buen camino',
    message: 'El último informe sobre la Agenda 2030 revela que, sin una inversión masiva y un aumento de políticas efectivas, su consecución seguirá siendo difícil de alcanzar.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/11-09-2023-Thailand-RCblog-03.jpg/image1170x530cropped.jpg',
    title: 'La producción pesquera y acuícola mundial logra un máximo histórico',
    message: 'En 2022 llega a más de 223 millones de toneladas, un 4,4% por encima de 2020, revela un informe de la agencia para la alimentación.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/05-06-2024-UN-Photo-Guterres-01.jpg/image1170x530cropped.jpg',
    title: 'Cambio climático: no somos los dinosaurios, somos el meteorito, advierte Guterres',
    message: 'El titular de la ONU se dirige al mundo con motivo del Día Mundial del Medio Ambiente y tras la publicación del último informe de la agencia de meteorología sobre el Estado del clima.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/240524_Sustainable_Development_Cities_Mexico2.jpg/image1170x530cropped.jpg',
    title: 'La gestión urbana sostenible es un mecanismo de supervivencia del ser humano',
    message: 'La urbanización bien planificada y gestionada puede transformar el desarrollo ambiental sostenible. Países como México han implementado varias acciones para combatir las cargas ambientales.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/28-05-2024-UN-Photo-SIDS4-Antigua-01.jpg/image1170x530cropped.jpg',
    title: 'Los pequeños estados insulares se hunden ahogados por el mar',
    message: 'Estas naciones, cuya existencia está amenazada por el aumento del nivel del mar, se están quedando despobladas y pagando las consecuencias de un cambio climático que no han creado ellos.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/14-06-2023_ILO_Lesotho.jpg/image1170x530cropped.jpg',
    title: 'El desempleo mundial descenderá ligeramente en 2024',
    message: 'A pesar de la mejora en las previsiones, la agencia de trabajo advierte que persisten las desigualdades en los mercados de trabajo y en el acceso a las oportunidades de empleo, las cuales afectan a las mujeres de forma desproporcionada.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/05-10-2023_Unsplash_Saudi-Arabia.jpg/image1170x530cropped.jpg',
    title: 'Cambio climático: hay un 80% de probabilidades de que el planeta siga calentándose los próximos cinco años por encima de los 1,5 grados',
    message: 'Las consecuencias serán devastadoras poniendo a millones de personas en riesgo: más olas de calor y más extremas, sequías más extremas, y subida del nivel del mar, entre otras amenazas.',
  },
  {
    image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/23-05-2024_WFP_Gaza.jpg/image1170x530cropped.jpg',
    title: 'Alrededor de 181 millones de niños tienen dificultades para acceder a dietas nutritivas',
    message: 'La inflación, unida a la desigualdad, los conflictos y la crisis climática han llevado a los menores a una pobreza alimentaria, según la agencia de la ONU para la infancia.',
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
            date={mainNews.date}
            topic={mainNews.topic}
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