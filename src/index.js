import React from 'react';
import ReactDOM from 'react-dom';
import './css/Style.css';
import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Services from './Services';
import Feature from './Feature';
import Advisor from './Advisor';
import Review from './Review';
import Contact from './Contact'; 
import BackToTop from "./BackToTop";

import {BrowserRouter, Route, Switch} from 'react-router-dom'


ReactDOM.render(
    <>


<BrowserRouter>
<Header />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
        <Route path="/Feature" component={Feature} />
        <Route path="/Advisor" component={Advisor} />
        <Route path="/Review" component={Review} />
        <Route path="/Contact" component={Contact} />
    </Switch>
<Footer />
</BrowserRouter>
<BackToTop />

    </>

    , document.getElementById('root'));

