import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  const appStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    padding: '30px',
    maxWidth: '500px',
    margin: '0 auto'
  };

  const buttonStyle = {
    padding: '10px 16px',
    backgroundColor: showProducts ? '#e74c3c' : '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div style={appStyle}>
      <h1>React Product Dashboard</h1>

      <div>
        <label htmlFor="nameInput" style={{ fontWeight: '600' }}>
          Enter your name:
        </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here..."
          style={inputStyle}
        />
      </div>

      {name && (
        <p style={{ fontSize: '18px', color: '#2c3e50', fontWeight: 'bold' }}>
          Hello, {name}
        </p>
      )}

      <button onClick={() => setShowProducts(!showProducts)} style={buttonStyle}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
