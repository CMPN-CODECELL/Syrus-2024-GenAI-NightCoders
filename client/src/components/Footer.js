import React from 'react';
import Logo from '../images/logo.jpg'; // Import your logo image here
import '../assets/css/animate.css'
import '../assets/css/base-style.css'
import '../assets/css/bootstrap-5.0.0-alpha-2.min.css'
import '../assets/css/lindy-uikit.css'
import '../assets/css/LineIcons.2.0.css'


const Footer = () => {
    return (
        <footer className="footer footer-style-4 footer-dark">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo */}
                        <div className="footer-widget">
                            <div className="logo flex flex-row">
                                <a href="#0"> <img src={Logo} alt="Logo"  className="rounded-full h-14 mx-3"/> </a>
                                <p className="my-3 decoration-4">Tvacha</p>
                            </div>
                            
                            <ul className="socials">
                                <li> <a href="#0"> <i className="lni lni-facebook-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-twitter-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-instagram-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-linkedin-original"></i> </a> </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-widget">
                            <h6>Quick Link</h6>
                            <ul className="links">
                                <li> <a href="/">Home</a> </li>
                                <li> <a href="/About">About</a> </li>
                                <li> <a href="/contactUs">Contact Us</a> </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-widget">
                            <h6>Services</h6>
                            <ul className="links">
                                <li> <a href="/Test">Take Test</a> </li>
                                <li> <a href="/apply-doctor">Apply Doctor</a> </li>
                                <li> <a href="/viewDoctors">View Doctors</a> </li>
                            </ul>
                        </div>

                        {/* Download App */}
                        <div className="footer-widget">
                            <h6>Donate</h6>
                            <ul className="download-app">
                                <li>
                                    <a href="#0">
                                        <span className="icon"><i class="lni lni-book"></i></span>
                                        <span className="text"> <b>Donate Us</b> </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright-wrapper">
                    <p>Design and Developed by Vemburaj and Mayur</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
