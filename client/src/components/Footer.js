import React from 'react'
import Button from '../components/Button.js';
import home from '../homeIcon.png';
function Footer() {
    return (
        <div className="text-center">
            <Button url="/" className="p-3 w-25" image={home} altText="homeButton" />
        </div>
    )
}

export default Footer;
