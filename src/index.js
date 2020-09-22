import React from 'react';
import ReactDOM from 'react-dom';
import './css/Style.css';
import './css/boxicons.min.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Blog from './Blog';
import DropDown from './DropDown';
import Contact from './Contact';
import Footer from './Footer';
import ScrollArrow from './ScrollArrow';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
    <>

        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/Home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Team" component={Team} />
            <Route path="/Blog" component={Blog} />
            <Route path="/DropDown" component={DropDown} />
            <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />        
        </BrowserRouter>
        
        <ScrollArrow />
    </>

    , document.getElementById('root'));

