import './Quotes.css';

const Quotes = () => {
  return (
    <section className="quotes">
      <h2>Algunas frases que nos inspiran...</h2>
      <div className="quote-list">
        {["Quote 1", "Quote 2", "Quote 3"].map((quote, index) => (
          <div className="quote" key={index}>
            <blockquote>{quote}</blockquote>
            <cite>Title - Description</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
