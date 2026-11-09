import React from 'react';
import Product from './Product.jsx';

const ProductList = () => {
  const products = [
    { id: 1, title: 'Laptop', price: 1200 },
    { id: 2, title: 'Phone', price: 800 },
    { id: 3, title: 'Tablet', price: 600 }
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontSize: '20px', color: '#34495e' }}>Product Catalog</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
