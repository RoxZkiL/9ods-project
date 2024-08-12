import tips from "./utils/BlogSection";
import { useParams } from "react-router-dom";

const TipDetail = () => {
  const { id } = useParams();

  const tip = tips.find((tip) => tip.id === parseInt(id));

  if (!tip) return <p>No se encontró ese recurso</p>;

  return (
    <div>
      <div>
        <img src={tip.imgSrc} alt="img not found" />
      </div>
      <div>
        <h2>{tip.title}</h2>
        <p>{tip.text}</p>
      </div>
    </div>
  );
};

export default TipDetail;
