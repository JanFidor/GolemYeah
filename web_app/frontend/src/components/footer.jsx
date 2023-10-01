import React from 'react';
import '../assets/styles/footer.css';
import logo from '../assets/images/logo-wide-white.png';

const Footer = () => (
    <footer className="footer">
        <img style={{height: "70%"}} src={logo} alt="logo-wide"/>
    </footer>
);

export default Footer;