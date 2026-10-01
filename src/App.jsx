import { startTransition, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import { products } from './data/products.js';

export default function App() {
  const [selected, setSelected] = useState(null);

  const openProduct = (product) => {
    startTransition(() => setSelected(product));
  };

  const closeProduct = () => {
    startTransition(() => setSelected(null));
  };

  return (
    <main className="app">
      <div className="container">
        <header className="header">
          <div className="logo">
            React<span>Shop</span>
          </div>

          <div className="badges">
            <div className="badge">React 19.3 • ViewTransition</div>
            <div className="badge_red">Made by Upjot Singh</div>
          </div>
        </header>

        {selected ? (
          <ProductDetails product={selected} onClose={closeProduct} />
        ) : (
          <section>
            <div className="hero">
              <div>
                <h1>Featured Products</h1>
                <p>Click a product to see React ViewTransition in action.</p>
              </div>

              <div className="hint">👆 Click a product</div>
            </div>

            <div className="grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onSelect={openProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
