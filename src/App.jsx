import { startTransition, useState, ViewTransition } from 'react';

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85',
    description: 'Premium wireless headphones with immersive sound, soft ear cushions, and all-day comfort.',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
    description: 'A modern smartwatch designed to keep you connected and track your daily activity.',
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=85',
    description: 'A precision gaming mouse with an ergonomic design for smooth and responsive control.',
  },
];

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
          <div className="logo">React<span>Shop</span></div>
          <div className="badges">
          <div className="badge">React 19.3 • ViewTransition</div>
          <div className="badge_red">Made by Upjot Singh</div>
          </div>
        </header>

        {selected ? (
          <section className="details">
            <button className="back" onClick={closeProduct}>← Back to products</button>
            <div className="detailsCard">
              <div className="detailsImageWrapper">
                <ViewTransition name={`product-${selected.id}`}>
                  <img src={selected.image} alt={selected.title} className="detailsImage" />
                </ViewTransition>
              </div>
              <div className="detailsContent">
                <div className="smallLabel">FEATURED PRODUCT</div>
                <h1>{selected.title}</h1>
                <div className="detailsPrice">{selected.price}</div>
                <p>{selected.description}</p>
                <button className="cart">Add to Cart</button>
              </div>
            </div>
          </section>
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
                <article key={product.id} className="card" onClick={() => openProduct(product)}>
                  <div className="imageWrapper">
                    <ViewTransition name={`product-${product.id}`}>
                      <img src={product.image} alt={product.title} />
                    </ViewTransition>
                  </div>
                  <div className="cardContent">
                    <h2>{product.title}</h2>
                    <div className="price">{product.price}</div>
                    <button>View Product →</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
