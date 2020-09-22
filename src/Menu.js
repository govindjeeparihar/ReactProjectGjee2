import React,{useState} from 'react';
import './css/Menu.css';
import {NavLink} from 'react-router-dom'



const Menu = () => {
    const [open, setOpen] = useState(false);
    const [dopen, dropOpen] = useState(false)
    return(
        <>
 <nav className="navbar navbar-expand-lg">
 <span className="MenuTrigger d-lg-none" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className={open ? "MenuClose MenuOpen" : "MenuClose"}>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to="/Home">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/About">About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Services">Services</NavLink> </li>
                    <li className="nav-item"> <NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/Team">Team</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/Blog">Blog</NavLink> </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/DropDown">Drop Down</NavLink>
                    <span className="dropdown-toggle" onClick={() => dropOpen(!dopen)}></span>
                        <div className={dopen ? "DropOpen" : "DropClose"}>
                            <NavLink className="nav-link" to="/DropDown">1 Drop Down</NavLink>
                            <NavLink className="nav-link" to="/DropDown">2 Drop Down</NavLink>
                        </div>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                </ul>
                </div>
        </nav>
        </>
    )
}

export default Menu;