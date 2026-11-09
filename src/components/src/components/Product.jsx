import React from 'react';
import Card from './Card.jsx';

const Product = ({ title, price }) => {
  return (
    <Card>
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{title}</h3>
      <p style={{ margin: 0, fontWeight: 'bold', color: '#27ae60' }}>
        Price: ${price}
      </p>
    </Card>
  );
};

export default Product;
