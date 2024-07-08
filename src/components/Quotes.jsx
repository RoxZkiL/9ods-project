import "./Quotes.css";
import img1 from "../assets/cecilia-goya-de-rivello.jpg";
import img2 from "../assets/kofi-annan.jpg";
import img3 from "../assets/al-gore.jpg";
import img4 from "../assets/indra-nooy.jpg";

const Quotes = () => {
  return (
    <div className="quotes-container">
      <h2>Algunas frases que nos inspiran...</h2>
      <h3>De referentes en la industria</h3>
      <div className="quotes-grid">
        <div className="quote-card">
          <p>
            “Ser sustentable no es sólo lavar las culpas ni sólo cuidar el medio
            ambiente, sino ser socialmente justo, responsable con el ambiente y,
            por lo tanto, también económicamente viable.”
          </p>
          <div className="author">
            <img src={img1} alt="Cecilia Goya de Rivello" />
            <div className="author-text">
              <span>- Cecilia Goya de Rivello</span>
              <span>Ceo Sustentable</span>
            </div>
          </div>
        </div>
        <div className="quote-card">
          <p>
            “Hay un nuevo entendimiento universal de que las fuerzas de mercado
            son esenciales para el desarrollo sostenible.”
          </p>
          <div className="author">
            <img src={img2} alt="Kofi Annan" />
            <div className="author-text">
              <span>- Kofi Annan</span>
              <span>Ex Secretario ONU</span>
            </div>
          </div>
        </div>
        <div className="quote-card">
          <p>
            “El desafío más grande al que nos enfrentamos es cambiar nuestra
            manera de pensar para ver el impacto ambiental como una oportunidad
            para la innovación y el crecimiento.”
          </p>
          <div className="author">
            <img src={img3} alt="Al Gore" />
            <div className="author-text">
              <span>- Al Gore</span>
              <span>Ex Vicepresidente de los EE.UU. y activista climático</span>
            </div>
          </div>
        </div>
        <div className="quote-card">
          <p>
            “Un negocio no puede tener éxito en una sociedad que fracasa. Por
            eso debemos ser parte de la solución a los problemas sociales y
            ambientales.”
          </p>
          <div className="author">
            <img src={img4} alt="Indra Nooyi" />
            <div className="author-text">
              <span>- Indra Nooyi</span>
              <span> Ex CEO de PepsiCo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
