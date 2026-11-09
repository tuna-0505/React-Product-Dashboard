import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px'
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
