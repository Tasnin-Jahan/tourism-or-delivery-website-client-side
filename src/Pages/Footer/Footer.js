import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 text-center">
            <small>Copyright {<FontAwesomeIcon icon={faCopyright} />} Reserved by Travelling-Services</small>
        </div>
    );
};

export default Footer;