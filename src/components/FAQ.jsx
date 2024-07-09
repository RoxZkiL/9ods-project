import "./FAQ.css";
import img from "../assets/faqimg.jpg";

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="img-div">
        <img src={img} alt="image not found" />
      </div>
      <div className="text-div">
        <div className="heading-div">
          <h2>¿Qué busca el desarrollo sostenible?</h2>
          <legend>
            Desarrollar infraestructuras robustas e impulsar una
            industrialización que respete el medio ambiente.
          </legend>
        </div>
        <div className="main-text">
          <p>
            El desarollo sostenible pretende construir infraestructuras
            resilientes, promover la industrialización sostenible y fomentar la
            innovación.
          </p>
          <p>
            El crecimiento económico, el desarrollo social y la acción por el
            clima dependen en gran medida de las inversiones en
            infraestructuras, el desarrollo industrial sostenible y el progreso
            tecnológico. Ante la rápida evolución del panorama económico mundial
            y el aumento de las desigualdades, el crecimiento sostenido debe
            implicar una industrialización que, en primer lugar, haga accesibles
            las oportunidades a todas las personas y, en segundo lugar, se apoye
            en la innovación y en infraestructuras resistentes.
          </p>
        </div>
      </div>
    </div>
  );
};
