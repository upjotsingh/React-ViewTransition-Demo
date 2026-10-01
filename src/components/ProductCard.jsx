import { ViewTransition } from 'react';

export default function ProductCard({ product, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(product);
    }
  };

  return (
    <article
      key={product.id}
      className="card"
      onClick={() => onSelect(product)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="imageWrapper">
        <ViewTransition name={`product-${product.id}`}>
          <img src={product.image} alt={product.title} />
        </ViewTransition>
      </div>

      <div className="cardContent">
        <h2>{product.title}</h2>
        <div className="price">{product.price}</div>
        <button type="button">View Product →</button>
      </div>
    </article>
  );
}
