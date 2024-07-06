import './Main.css';
import transparentVideo from '../assets/video.mp4'; // Asegúrate de tener el video en la ruta correcta

const Main = () => {
  return (
    <main className="main">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={transparentVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="intro">
        <h1>ODS 9: Desarrollo sostenible</h1>
        <p>Industria, innovación e infraestructura</p>
        <button>Más información</button>
      </section>
    </main>
  );
};

export default Main;