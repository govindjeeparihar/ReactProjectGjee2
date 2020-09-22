import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((resp) => {
                resp.json().then((result) => {
                    setPortfolio(result.slice(0, 9))
                })
            })
    }, [])



    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Our Portfolio</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>Our Portfolio</li>
                        </ul>
                    </div>

                </div>
            </section>


            <div className="container">
                <div className="row py-5" >

                    {portfolio.map(item => (
                        <div className="col-lg-4 col-md-6 portfolioItem" key={item.id}>
                            <img className="img-fluid" src={item.download_url} />
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Portfolio;