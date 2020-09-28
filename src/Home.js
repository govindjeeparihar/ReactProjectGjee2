import React, { useState, useEffect } from 'react';
import HomeSlider from './HomeSlider';
import Testimonial from './Testimonial';

import factIcon1 from './images/icon-1.png';
import factIcon2 from './images/icon-2.png';
import factIcon3 from './images/icon-3.png';
import factIcon4 from './images/icon-4.png';
import factIcon5 from './images/icon-5.png';
import factIcon6 from './images/icon-6.png';
import factIcon7 from './images/icon-7.png';
import factIcon8 from './images/icon-8.png';

import about1 from './images/about-1.jpg';
import about2 from './images/about-2.jpg';
import businessMan from './images/business-man.png';


const Home = () => {

    useEffect(() => {
        document.body.className = 'home';
        return () => { document.body.className = ' ' }
    })
    return (
        <>
            <HomeSlider />
            <div className="fact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="fact-item">
                                <img className="img-fluid" src={factIcon4} alt="Icon" />
                                <h3>Qualified Team</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="fact-item">
                                <img className="img-fluid" src={factIcon1} alt="Icon" />
                                <h3>Individual Approach</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="fact-item">
                                <img className="img-fluid" src={factIcon8} alt="Icon" />
                                <h3>100% Success</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="fact-item">
                                <img className="img-fluid" src={factIcon6} alt="Icon" />
                                <h3>100% Satisfaction</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about-img">
                                <div className="about-img-1">
                                    <img className="img-fluid" src={about2} alt="Image" />
                                </div>
                                <div className="about-img-2">
                                    <img className="img-fluid" src={about1} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-header">
                                <p>Learn About Us</p>
                                <h2>25 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                            </p>
                                <a className="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="container">
                    <div className="section-header">
                        <p>Consulting Services</p>
                        <h2>Our Best Consulting Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon1} alt="Icon" />
                                <h3>Business Strategy</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon2} alt="Icon" />
                                <h3>Project Management</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon3} alt="Icon" />
                                <h3>Market Research</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon4} alt="Icon" />
                                <h3>Human Resource</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon5} alt="Icon" />
                                <h3>Online Business</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon6} alt="Icon" />
                                <h3>Capital Management</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon7} alt="Icon" />
                                <h3>Business Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <img className="img-fluid" src={factIcon8} alt="Icon" />
                                <h3>Online Marketing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                            </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <div className="feature-img">
                                <img className="img-fluid" src={businessMan} alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-header">
                                <p>Our Feature</p>
                                <h2>Why Choose Us?</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus
                        </p>
                            <div className="row counters">
                                <div className="col-6 mb-5">
                                    <i className="fa fa-user"></i>
                                    <div className="counters-text">
                                        <h3 data-toggle="counter-up">100</h3>
                                        <p>Our Staffs</p>
                                    </div>
                                </div>
                                <div className="col-6 mb-5">
                                    <i className="fa fa-users"></i>
                                    <div className="counters-text">
                                        <h3 data-toggle="counter-up">200</h3>
                                        <p>Our Clients</p>
                                    </div>
                                </div>
                                <div className="col-6 mb-5">
                                    <i className="fa fa-check"></i>
                                    <div className="counters-text">
                                        <h3 data-toggle="counter-up">300</h3>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className="col-6 mb-5">
                                    <i className="fa fa-running"></i>
                                    <div className="counters-text">
                                        <h3 data-toggle="counter-up">400</h3>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </>
    )
}

export default Home;