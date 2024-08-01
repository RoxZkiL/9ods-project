import "./styles/FirstSection.css";
import img from "../../assets/Importance/FirstSection/imag-1.png";

const FirstSection = () => {
  return (
    <div className="relevancia-global-container">
      <div className="text-section">
        <h3 className="main-title">Relevancia Global</h3>
        <p className="info-text">
          Crecimiento Económico: La infraestructura adecuada y la promoción de
          la industrialización sostenible son pilares para el crecimiento
          económico inclusivo y sostenible, especialmente en países en
          desarrollo.
          <br />
          <br />
          Innovación Tecnológica: Fomentar la innovación y mejorar la capacidad
          tecnológica en sectores industriales es crucial para aumentar la
          productividad y promover la competitividad en la economía global.
          <br />
          <br />
          Acceso a Infraestructura Básica: La construcción de infraestructuras
          resilientes, incluidos transportes y tecnologías de la información y
          comunicación (TIC), es fundamental para conectar comunidades y mejorar
          el acceso a servicios básicos como salud y educación.
          <br />
          <br />
          Reducción de la Brecha Digital: Promover el acceso universal y
          equitativo a internet es esencial para reducir la brecha digital y
          permitir la participación equitativa en la economía digital global.
        </p>
      </div>
      <div className="image-section">
        <img src={img} alt="Relevancia Global" />
      </div>
    </div>
  );
};

export default FirstSection;
