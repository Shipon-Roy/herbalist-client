import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="text-center my-5"><strong>BROWSE</strong> MODELS</h1>
            <div className="row">
                {
                    products.slice(0, 6).map(product => <div 
                      key={product._id}
                    className="col-md-4 mt-5">
                    <div className="card h-100">
                      <img src={product.img} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6>{product.price}</h6>
                        <p className="card-text">{product.describtion}</p>
                      </div>
                      <button className="btn btn-info">Buy Now</button>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Products;