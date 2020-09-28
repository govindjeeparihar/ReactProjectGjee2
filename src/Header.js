import React,{useState, useEffect} from 'react';
import './css/Header.css';
import Navigation from './Navigation';


const Header = () => {

    const [scroll, setScroll] = useState(true);

    useEffect( () => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY < 40;
            if(scrollCheck !== scroll){
                setScroll(scrollCheck)
            }
        })
    });

    return (
        <header className={`${scroll ? 'hwrapper' : 'sticky'}`}>
            <div className="top-bar d-none d-lg-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="far fa-clock"></i>
                                    <span>8:00 - 9:00</span>
                                    <strong>Mon - Fri</strong>
                                </div>
                                <div className="text">
                                    <i className="fa fa-phone-alt"></i>
                                    <span>+123 456 7890</span>
                                    <strong>For Appointment</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <ul className="header-social">
                                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href=""><i className="fab fa-instagram"></i></a></li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header-bottom-wrapper"> 
            <div className="header-bottom"> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a className="navbar-brand" href="#">GJee</a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <Navigation />
                    </div>
                </div>
            </div>
            </div>
            </div>

        </header>
    )
}


export default Header;