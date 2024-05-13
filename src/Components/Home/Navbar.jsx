import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h5><a className="navbar-brand" href="#">Legal Connect</a></h5>
                <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" Link to="/">Check Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My course</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inbox</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Account</a>
                        </li>      
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
