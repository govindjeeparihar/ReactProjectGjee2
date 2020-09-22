import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
            </section>


            <section className="contact">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
                                <div className="form-group">
                                    <input className="form-control" name="firstname"
                                        ref={register({
                                            required: true,
                                            minLength: 3,
                                            maxLength: 10,
                                            pattern: /^[A-Za-z]+$/i,

                                        })} />

<div className="validate">{errors.firstname && 'First name is required.'} </div>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" name="lastname" ref={register({ required: true })} />
                                    <div className="validate">{errors.lastname && 'Last name is required.'}</div>
                                </div>

                                <div className="form-group">
                                    <input className="form-control" name="age" ref={register({ required: true, pattern: /\d+/ })} />
                                    <div className="validate"> {errors.age && 'Please enter number for age.'}</div>
                                </div>

                                <div className="form-group">
                                    <input className="form-control" name="email" ref={register({
                                        required: true, pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                             
                                          }
                                    })} />
                                    <div className="validate"> {errors.email && 'Please enter valid email.'}</div>
                                </div>

                                <input className="btn btn-primary" type="submit" />
                            </form>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default Contact;