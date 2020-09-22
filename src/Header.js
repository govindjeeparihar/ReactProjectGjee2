import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import './css/Header.css';


const Header = () => {

    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    });




    return (

        <header>
            <div className={`${scroll ? 'hwrapper' : 'sticky'}`}>
                <div className="container">

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <div className="logo">Moderna</div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-9"><Menu /></div>

                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header;