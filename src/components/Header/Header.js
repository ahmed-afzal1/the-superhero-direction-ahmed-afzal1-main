import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    const navStyle = {
        backgroundColor : '#e3f2fd',
    };
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" className="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/feature">Features Auction</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/about-us">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="card w-75 mt-3">
                    <div className="card-body rounded">
                        <h3 className="text-center text-uppercase main-title">Auctoin for everyone</h3>
                        <h5 className="text-center"><span className="text-uppercase">Total Budget</span>: 10 <span className="text-uppercase">core</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;