import { ViewTransition } from 'react';

export default function ProductDetails({ product, onClose }) {
  return (
    <section className="details">
      <button type="button" className="back" onClick={onClose}>
        ← Back to products
      </button>

      <div className="detailsCard">
        <div className="detailsImageWrapper">
          <ViewTransition name={`product-${product.id}`}>
            <img src={product.image} alt={product.title} className="detailsImage" />
          </ViewTransition>
        </div>

        <div className="detailsContent">
          <div className="smallLabel">FEATURED PRODUCT</div>
          <h1>{product.title}</h1>
          <div className="detailsPrice">{product.price}</div>
          <p>{product.description}</p>
          <button type="button" className="cart">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
