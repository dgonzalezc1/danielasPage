import React from 'react'
import "./Banner.css"; 
import photo from "../Assets/FotoDanielaNoFondo.png";

function Banner() {
    return (
        <div className="Banner" id="Banner">
            <div className="bannerContent">
                <div className="bannerText">
                    <div className="bannerText-princ">
                        <h1>Hello.</h1>
                        <h2>I'm Daniela</h2>
                        <h2>González</h2>
                    </div>
                    <div className="bannerText-sec">
                        <p>Newly graduated Mechanical Engineer and Computer Scientist<br/> from Colombia passionate about innovation, design, UX/UI, entrepreneurship <br/>and sustainability.</p>
                    </div>
                    
                </div>
                <div className="bannerImage">
                    <img className="bannerImage-img" src={photo} alt="Daniela Smiling" />
                </div> 
            </div>    
        </div>
    )
}

export default Banner
