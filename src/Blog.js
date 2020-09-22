import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return(

        <>
        <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Blog</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>Blog</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog;