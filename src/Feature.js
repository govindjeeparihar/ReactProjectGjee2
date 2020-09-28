import React from 'react';
import businessMan from './images/business-man.png';

import Testimonial from './Testimonial';

const Feature = () => {
    return(
        <>
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
                <Testimonial />
            </div>
            
        </>
    )
}


export default Feature;