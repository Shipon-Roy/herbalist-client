import React from 'react';
import { useForm } from "react-hook-form";
import { Link , useHistory} from 'react-router-dom';

const Contact = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
    };
    return (
        <div>
            <div className="text-center bg-info p-5">
                <h1>Contacts</h1>
                <p>Nibh tellus molestie nunc non blandit. Mi tempus imperdiet nulla malesuada pellentesque elit</p>
            </div>
            <div className="mx-3 my-5">
                <div className="text-center">
                    <h1>Have any Questions?</h1>
                    <p>Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque</p>
                </div>
                <div className="my-5">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("displayName")} placeholder="Your Name" />
                        <input type="email" {...register("email")} placeholder="Your Email" />
                        <input type="text" name="" id="" placeholder='Type Your Text' />
                        <input type="submit" value="Send Massage" />
                    </form>
                </div>
            </div>
            {/* counter */}
        <div className='mt-5 bg-secondary p-5 text-white'>
                <div className="row mx-3 text-center">
                    <div className="col-md-3">
                        <h1 className='text-dark'>Email</h1>
                        <p>herbalist@cannabis.site</p>
                        <p>herbalist@test.site</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-dark'>Phone</h1>
                        <p>+1-896-882-3255</p>
                        <p>+1-896-882-3255</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-dark'>Location</h1>
                        <p>211 Lehner Valleys Apt.</p>
                        <p>287 Harrisstad</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-dark'>Open Hours</h1>
                        <p>9:00 am to 5:00 pm</p>
                        <p>Monday to Saturday</p>
                    </div>
                </div>
            </div>
            {/* counter  */}
        </div>
    );
};

export default Contact;