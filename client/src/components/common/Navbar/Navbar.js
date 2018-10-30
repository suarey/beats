import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default ({ currentUser }) => {
    return (
        <nav className="nav clearfix">
            <div className="float-left">
                <span ><a href="https://imgur.com/2iHabfd"><img className="max-width: 50%" src="https://i.imgur.com/2iHabfd.png" title="source: imgur.com" /></a></span>
                <Link className="nav-link" to="/">HOME</Link>
                {/* <Link className="nav-link" to="/vip">VIP</Link> */}
            </div>
            <div className="float-right">
                {currentUser
                    ? (
                        <span>
                            <span className="nav-link">Welcome {currentUser.name}</span>
                            <Link className="nav-link" to="/logout">LOGOUT</Link>
                        </span>        
                    )
                    : (
                        <span>
                            <Link className="nav-link" to="/login">LOGIN</Link>
                            <Link className="nav-link" to="/signup">SIGNUP</Link>           
                        </span>
                    )
                }
            </div>
        </nav>
    )
};