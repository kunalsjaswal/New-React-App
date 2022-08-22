import React from 'react'
import newslogo from '../images/newslogo.jpg';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img src={newslogo} alt="" width="30" height="28" className="d-inline-block align-text-top"/>
                    <Link className="navbar-brand mx-2" to="/">News Nation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-5">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/business">Business</Link>
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        <Link className="nav-link" to="/health">Health</Link>
                        <Link className="nav-link" to="/science">Science</Link>
                        <Link className="nav-link" to="/sports">Sports</Link>
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </div>
                    </div>
                </div>
        </nav>
    
        </>
    )
}

export default Navbar