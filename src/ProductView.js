import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8082/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div>
      <h1>Product Details (ID: {id})</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>            
            <th>Price</th>
            <th>Category ID</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.category_id}</td>
            <td>{product.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductView;
