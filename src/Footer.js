import React from 'react';
import './css/Footer.css';



const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h3>Our Head Office</h3>
                                    <p><i className="fa fa-map-marker-alt"></i>East Delhi</p>
                                    <p><i className="fa fa-phone-alt"></i>+91 9990365095</p>
                                    <p><i className="fa fa-envelope"></i>govindjee88@gmail.com</p>

                                    <ul className="footer-social">
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fab fa-youtube"></i></a></li>
                                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><a href="">Terms of use</a></li>
                                        <li><a href="">Privacy policy</a></li>
                                        <li><a href="">Cookies</a></li>
                                        <li><a href="">Help</a></li>
                                        <li><a href="">FQAs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h3>Newsletter</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Email goes here" />
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>© <a href="#">GovindParihar</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-right">Developed By <a href="#">GovindJeeParihar</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;