import React from 'react';
import './css/HomeSlider.css';
import Slider from 'react-slick';
import slider1 from './images/slider-1.jpg';
import slider2 from './images/slider-2.jpg'
import slider3 from './images/slider-3.jpg'

const HomeSlider = () => {

    const setting = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        spdee: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="slider">
            <div className="container-fluid">
                <Slider {...setting}>
                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider2})` }}>

                            <div className="slider-text">
                                <h2>Your Success Our Achievement</h2>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>

                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider3})` }}>

                            <div className="slider-text">
                                <h2>Your Business Our Effort</h2>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>

                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider1})` }}>

                            <div className="slider-text">
                                <h2>Fastest Way to Achieve Success</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>
                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider2})` }}>

                            <div className="slider-text">
                                <h2>Your Success Our Achievement</h2>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>
                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider3})` }}>

                            <div className="slider-text">
                                <h2>Your Business Our Effort</h2>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>
                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider1})` }}>

                            <div className="slider-text">
                                <h2>Fastest Way to Achieve Success</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>
                    <div className="slider-item">
                        <div className="slider-item-inner" style={{ backgroundImage: `url(${slider2})` }}>
                             
                            <div className="slider-text">
                                <h2>Your Success Our Achievement</h2>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                            </p>
                                <div className="slider-btn">
                                    <a className="btn" href=""><i className="fa fa-link"></i>Get Started</a>
                                    <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                                </div>
                            </div>
                        </div></div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeSlider;