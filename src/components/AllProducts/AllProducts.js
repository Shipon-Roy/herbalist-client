import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://herbalist-server.onrender.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="text-center my-5"><strong>All </strong>Products</h1>
            <div className="row">
                {
                    products.map(product => <div
                      key={product._id}
                    className="col-md-4 mt-5">
                    <div className="card h-100">
                      <img src={product.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6>{product.price}</h6>
                        <p className="card-text">{product.describtion}</p>
                      </div>
                      <Link to={`/products/${product._id}`}>
                        <div className="text-center p-3">
                        <button className="btn btn-info">Buy Now</button>
                        </div>
                      </Link>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;