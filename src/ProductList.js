import React, { useState, useEffect } from 'react';


function ProductList() {

  const Data = {id: '',name: '',description: '',price: '',category_id: '',stock: ''};
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState(Data);
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = 'http://localhost:8082/api/products';

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };


  const fetchProducts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 
  const handleSubmit = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  const handleInsert = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        setForm(Data); 
        fetchProducts();
        showMessage('Product added successfully!');
      })
      .catch(err => console.error(err));
  };

 
  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
  };


  const handleUpdate = () => {
    fetch(`${API_URL}/${form.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        setForm(Data); 
        setIsEditing(false);
        fetchProducts();
        showMessage('Product updated successfully!');
      })
      .catch(err => console.error(err));
  };

  
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => {
        fetchProducts();
        showMessage('Product deleted successfully!');
      })
      .catch(err => console.error(err));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product List</h1>

      {message && (
        <div
          style={{
            backgroundColor: '#e0ffe0',
            color: '#2e7d32',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px'
          }}
        >
          {message}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleSubmit}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleSubmit}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleSubmit}
        />
        <input
          type="number"
          name="category_id"
          placeholder="Category ID"
          value={form.category_id}
          onChange={handleSubmit}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleSubmit}
        />

        {isEditing ? (
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => {
              setForm(Data); 
              setIsEditing(false); 
            }}>
              Clear
            </button>
          </div>
        ) : (
          <div>
            <button onClick={handleInsert}>Insert</button>
            <button onClick={() => setForm(Data)}>Clear</button>
          </div>
        )}

      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>P {product.price}</td>
              <td>{product.category_id}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
