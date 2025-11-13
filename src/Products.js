import React,{useState, useEffect} from 'react';

function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8082/api/products')
            .then(response => response.json())
            .then(data => setProducts(data), setLoading)
            .catch(error => console.error('Error fetching products:', error), setLoading(false));
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>            
                        <th>Category ID</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>       
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category_id}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;