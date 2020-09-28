import React from 'react';
import './css/Testimonial.css';
import Slider from 'react-slick';

import testimonial1 from './images/testimonial-1.jpg';
import testimonial2 from './images/testimonial-2.jpg';
import testimonial3 from './images/testimonial-3.jpg';
import testimonial4 from './images/testimonial-4.jpg';


const Testimonial = () => {
    const setting = {
        dots:false,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow:3,
        speed: 500,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <>

            <div className="testimonial">
                <div className="container">
                    <div className="section-header">
                        <p>Testimonial Carousel</p>
                        <h2>100% Positive Customer Reviews</h2>
                    </div>

                    <Slider {...setting}>
                    <div className="testimonial-item">
                        <img src={testimonial2} alt="Image" />
                        <p>
                            Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>

                    <div className="testimonial-item">
                        <img src={testimonial3} alt="Image" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial4} alt="Image" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial1} alt="Image" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>

                    <div className="testimonial-item">
                        <img src={testimonial2} alt="Image" />
                        <p>
                            Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div><div className="testimonial-item">
                        <img src={testimonial3} alt="Image" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial4} alt="Image" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial1} alt="Image" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>

                 </Slider>

                </div>
            </div>


            
        </>
    )
}

export default Testimonial;