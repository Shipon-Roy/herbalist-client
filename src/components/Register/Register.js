import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../LogIn/LogIn.css';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-5">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" />
                <input {...register("email")} placeholder="Your Email" />
                <input type="number" {...register("password")} placeholder="Password" />
                <input type="submit" />
            </form>
            <p className="text-center">Already have a account <Link to="/logIn">LonIn here</Link> </p>
        </div>
    );
};

export default Register;