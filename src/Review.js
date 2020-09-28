import React from 'react';
import Testimonial from './Testimonial';
import factIcon1 from './images/icon-1.png';
import factIcon4 from './images/icon-4.png';
import factIcon6 from './images/icon-6.png';
import factIcon8 from './images/icon-8.png';

const Review = () => {
    return(
        <>
        <div className="fact review">
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
        <Testimonial />
        </>
    )
}

export default Review;