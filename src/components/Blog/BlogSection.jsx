// BlogSection.js
import { useState } from "react";
import "./styles/BlogSection.css";
import tips from "./utils/BlogSection";
import Pagination from "./Pagination";

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tipsPerPage = 6;
  const totalTips = tips.length;
  const totalPages = Math.ceil(totalTips / tipsPerPage);

  // Calcular el índice de los elementos a mostrar en la página actual
  const indexOfLastTip = currentPage * tipsPerPage;
  const indexOfFirstTip = indexOfLastTip - tipsPerPage;
  const currentTips = tips.slice(indexOfFirstTip, indexOfLastTip);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="blog-section-container">
        {currentTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <img src={tip.imgSrc} alt={tip.title} className="tip-image" />
            <p className="tip-title">{tip.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default BlogSection;
