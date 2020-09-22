import React from 'react';
import { NavLink } from 'react-router-dom';
import Testimonial from './Testimonial';
import AboutImg from './images/about.jpg';


const About = () => {
    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About Us</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>About Us</li>
                        </ul>
                    </div>

                </div>
            </section>





            <section className="about aos-init aos-animate">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src={AboutImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
            </p>
                            <ul>
                                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
            </p>
                        </div>
                    </div>

                </div>
            </section>




            <Testimonial />
        </>
    )
}

export default About;