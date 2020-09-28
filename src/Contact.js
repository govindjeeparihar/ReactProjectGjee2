import React from 'react';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="section-header">
                        <p>Get In Touch</p>
                        <h2>Get In Touch For Any Query</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h3>Our Head Office</h3>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h3>Call for Help</h3>
                                    <p>+012 345 6789</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <h3>Email for Information</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Your Name"
                                        name="firstname"
                                        ref={register({
                                            required: true,
                                            minLength: 3,
                                            maxLength: 10,
                                            pattern: /^[A-Za-z]+$/i,

                                        })}
                                        />
                                        <p className="help-block text-danger">{errors.firstname && 'First name is required.'}</p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" placeholder="Your Email"
                                        name="email" ref={register({
                                            required: true, pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                 
                                              }
                                        })}
                                        />
                                        <p className="help-block text-danger">{errors.email && 'Please enter valid email.'}</p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Subject" name="subject" ref={register({ required: true })} />
                                        <p className="help-block text-danger">{errors.subject && 'Subject is required.'}</p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" placeholder="Message" name="msg" ref={register({ required: true })}></textarea>
                                        <p className="help-block text-danger">{errors.msg && 'Message is required.'}</p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;