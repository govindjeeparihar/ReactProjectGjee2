import React from 'react';
import './css/HomeSlider.css';

import Slider from 'react-slick';



const HomeSlider = () => {
    const setting = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }
    return (
        <div className="sliderWrapper">
            <div className="container">
            <Slider {...setting}>

                <div className="sliderItem">
                    <div className="carousel-container">
                        <h2 className="animated fadeInDown">Welcome to <span>Moderna</span></h2>
                        <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animated fadeInUp">Read More</a>
                    </div>
                </div>

                <div className="sliderItem">
                    <div className="carousel-container">
                        <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                        <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animated fadeInUp">Read More</a>
                    </div>
                </div>

                <div className="sliderItem">
                    <div className="carousel-container">
                        <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                        <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animated fadeInUp">Read More</a>
                    </div>
                </div>
            </Slider>
            </div>
            </div>
    )
}


export default HomeSlider;