import React,{useState, useEffect} from 'react';
import HomeSlider from './HomeSlider';
import whyus from './images/why-us.jpg'



const Home = () => {

    useEffect(() => {
        document.body.className = 'home';
        return () => { document.body.className = ''; }
      });
    
    return (

        <>
            <HomeSlider />

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


            <section className="why-us section-bg">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 video-box">
                            <img src={whyus} className="img-fluid" alt="" />
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4 vbox-item"></a>
          </div>

                            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                            </div>
                        </div>

                    </div>
    </section>


        </>
    )
}

export default Home;