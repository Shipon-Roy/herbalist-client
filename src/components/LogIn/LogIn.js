import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css'


const LogIn = () => {
    const {signInWithGoogle} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container my-5 text-center">
             <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="Your Email" />
                <input type="password" {...register("password")} placeholder="Password" />
                <input type="submit" value="LogIN" />
            </form>
            <p>Are you new? <Link to="/register">create account</Link> </p>
            <button onClick={signInWithGoogle} className="btn btn-info">Google LogIn</button>
        </div>
    );
};

export default LogIn;