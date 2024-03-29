import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const {user} = useAuth();
    const [product, setProduct] = useState({});
    const {id} = useParams();

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.status = 'pending'
        fetch('https://herbalist-server.onrender.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => { 
            if(result.insertedId){
                alert('welcome Your ordered successfull')
            }
        })
        console.log(data)
    }

    useEffect( () => {
        fetch(`https://herbalist-server.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(result => setProduct(result))
    }, [id])

    return (
        <div>
            <div className="container my-5">
                <div className="row container">
                <div className="col-md-4">
                    <div className="card h-100">
                        <img src={product.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6>{product.price}</h6>
                            <p className="card-text">{product.describtion}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        defaultValue={user.email}
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("name")}
                        placeholder="Name"
                        defaultValue={product.name}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("description")}
                        defaultValue={product.describtion}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        defaultValue={product.img}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        defaultValue={product.price}
                        type="price"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input
                        type="submit"
                        value="Order now"
                        className="btn btn-info w-50"
                    />
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Order;