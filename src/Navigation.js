import React,{useState} from 'react'
import './css/Navigation.css';

import { NavLink } from 'react-router-dom';




const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [dopen, dropOpen] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg">
 <span className="MenuTrigger d-lg-none" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className={open ? "MenuClose MenuOpen" : "MenuClose"}>
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/Home">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/About">About</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/Services">Services</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/Feature">Feature</NavLink> </li>
                <li className="nav-item"><NavLink className="nav-link" to="/Advisor">Advisor</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/Review">Review</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
            </ul>
            </div>
        </nav>

    )
}


export default Navigation;