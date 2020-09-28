import React from 'react';
import factIcon1 from './images/icon-1.png';
import factIcon2 from './images/icon-2.png';
import factIcon3 from './images/icon-3.png';
import factIcon4 from './images/icon-4.png';
import factIcon5 from './images/icon-5.png';
import factIcon6 from './images/icon-6.png';
import factIcon7 from './images/icon-7.png';
import factIcon8 from './images/icon-8.png';
import Testimonial from './Testimonial';

const Services = () => {
    return(
        <>
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
                <Testimonial />
            </div>
        </>
    )
}


export default Services;