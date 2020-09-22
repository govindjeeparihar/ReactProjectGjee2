import React from 'react';
import './css/Testimonial.css';

import Slider from 'react-slick';

import TestiImg1 from './images/testimonials-1.jpg';
import TestiImg2 from './images/testimonials-2.jpg';
import TestiImg3 from './images/testimonials-3.jpg';
import TestiImg4 from './images/testimonials-4.jpg';
import TestiImg5 from './images/testimonials-5.jpg';



const Testimonial = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:500,
        autoplay: true,

    }
    return (
        <>


<section className="testimonials aos-init">
      <div className="container">

        <div className="section-title">
          <h2>Tetstimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>




            <Slider {...setting}>


                <div className="item">
                    <div className="testimonial-item">
                        <img src={TestiImg1} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="testimonial-item">
                        <img src={TestiImg2} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="testimonial-item">
                        <img src={TestiImg3} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="testimonial-item">
                        <img src={TestiImg4} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="testimonial-item">
                        <img src={TestiImg5} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>



            </Slider>
            </div>
    </section>
        </>
    )
}

export default Testimonial