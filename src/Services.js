import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Our Services</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>Our Services</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="services">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">
                            <div className="icon-box icon-box-pink">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box icon-box-green">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box icon-box-blue">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="pricing section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row no-gutters">

                        <div className="col-lg-4 box">
                            <h3>Free</h3>
                            <h4>$0<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                            </ul>
                            <a href="#" className="get-started-btn">Get Started</a>
                        </div>

                        <div className="col-lg-4 box featured">
                            <h3>Business</h3>
                            <h4>$29<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="get-started-btn">Get Started</a>
                        </div>

                        <div className="col-lg-4 box">
                            <h3>Developer</h3>
                            <h4>$49<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="get-started-btn">Get Started</a>
                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default Services;