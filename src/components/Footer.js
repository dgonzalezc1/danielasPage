import React from 'react'
import "./Footer.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import icon from "../Assets/Icon.png";
import { Link } from "react-scroll";

library.add(faLinkedinIn, faGithub, faTwitter, faInstagram, faYoutube, faEnvelope, faPhoneAlt);

function Footer() {
    return (
        <div className="Footer" id="Footer">
            {/*<p>© 2021 Daniela González. All Rights Reserved.</p>
            <div>
                <p>+57 314 4840591</p>
                <p>d.gonzalezc1@uniandes.edu.co</p>  
            </div>*/}
            <img className="footerImage" src={icon} alt="D Logo" />
            <div className="footerTit">
                <p className="footerTit-name">Daniela González</p>
                <p className="footerTit-rights">© 2021 All Rights Reserved.</p>  
            </div>
            <div className="footerNav">
                <Link to="About">ABOUT</Link>
                <Link to="Portfolio">PORTFOLIO</Link>
                <Link to="Experience">EXPERIENCE</Link>
                <Link to="Education">EDUCATION</Link>
                {/*Link to="Interests">INTERESTS</Link>*/}
            </div>
            <div className="footerContact">
                <div className="footerIcons">
                    <a href="https://www.linkedin.com/in/d-gonzalezc/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="footerIcon"/></a>
                    <a href="https://github.com/dgonzalezc1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} className="footerIcon"/></a>
                    <a href="https://www.youtube.com/channel/UCWwKs8nIY5Kosj7-3VuEwUw" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} className="footerIcon"/></a>
                    <a href="https://twitter.com/dgonzalezcuervo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} className="footerIcon"/></a>
                    <a href="https://www.instagram.com/danielagonzalez.co/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="footerIcon"/></a>
                </div>
                <div className="footerLinks">
                    <a href="mailto:d.gonzalezc1@uniandes.edu.co">d.gonzalezc1@uniandes.edu.co</a>
                    <a href="tel:+573144840591">+57 314 4840591</a>
                </div>
            </div> 
        </div>
    )
}

export default Footer
