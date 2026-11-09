# Web Technologies Laboratory - Assignment 5 (React Product Dashboard)

**Student Name:** Tunahan Mutlu  
**Student ID:** 230408002  

## 1. File Organization
The project is built using Vite and React, demonstrating core React mental models without any external UI libraries or forbidden hooks:

- `package.json`: Configures React 18 dependencies and Vite scripts.
- `index.html`: Base HTML template containing the `#root` mount point.
- `src/main.jsx`: Mounts the root `App` component onto the DOM.
- `src/App.jsx`: Root state container managing `showProducts` (toggle state) and `name` (controlled input).
- `src/components/Card.jsx`: Layout composition wrapper leveraging the `children` prop.
- `src/components/Product.jsx`: Stateless presentation component rendering individual product items inside `Card`.
- `src/components/ProductList.jsx`: Renders a list of products dynamically using `.map()` with unique keys (`product.id`).
- `README.md`: Explains component hierarchy and implementation challenges.

## 2. Challenges Faced & Solutions
- **Controlled Component State:** Guaranteeing the input field strictly reflects React state required attaching an `onChange` handler to update `name` via `setName(e.target.value)` rather than reading values directly from DOM nodes.
- **Component Composition with `children`:** Isolating container styling logic inside `Card.jsx` while allowing `Product.jsx` to pass arbitrary content required using React's built-in `children` prop.
- **Conditional Rendering without Mutation:** Toggling product visibility was solved declaratively using boolean state (`showProducts`) combined with short-circuit evaluation (`{showProducts && <ProductList />}`) instead of manipulating element styles directly.
