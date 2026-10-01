# React 19.3 ViewTransition Demo ⚛️

A small React + Vite demo showing React 19.3's stable `<ViewTransition>` API with a shared-element product transition.

The demo starts with a product grid. Selecting a product transitions its image into the larger product-detail layout; going back performs the reverse transition.

## Tech

- React 19.3
- React DOM 19.3
- Vite
- React `<ViewTransition>`
- `startTransition`
- CSS
- Remote Unsplash images (no local image assets)

## Run locally

Requirements: a recent Node.js/npm installation.

```bash
npm install
npm run dev
```

Vite will print the local development URL in your terminal, typically `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## How the demo works

The state change is wrapped in React's `startTransition`:

```jsx
startTransition(() => {
  setSelected(product);
});
```

The corresponding product image in the list and detail views uses the same transition name:

```jsx
<ViewTransition name={`product-${product.id}`}>
  <img src={product.image} alt={product.title} />
</ViewTransition>
```

React can therefore associate the outgoing and incoming elements and coordinate the shared-element transition.

## Project structure

```text
react-viewtransition-demo/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Notes

- The project intentionally uses React `19.3.0` because `<ViewTransition>` is stable in React 19.3.
- Product images are loaded from remote Unsplash URLs rather than stored as assets in the repository.
- View Transition support also depends on the browser. For recording the demo, use a current Chromium-based browser.
