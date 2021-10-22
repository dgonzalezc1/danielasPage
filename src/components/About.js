import React from 'react'
import "./About.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJava, faJs, faHtml5, faCss3Alt, faReact, faNode, faFigma, faPython, faSwift } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

library.add(faJava, faJs, faHtml5, faCss3Alt, faReact, faNode, faFigma, faPython, faDatabase, faSwift);

function About() {
    return (
        <div className="About">
            <div className="aboutTop">
                <div className="aboutTop-tit">
                    <h3>About</h3>
                </div>
                <div className="aboutTop-txt">
                    <p>I'm a multi-cultural and multi-lingual senior student at Universidad de los Andes, Colombia, seeking to design efficient, 
                        innovative and sustainable solutions. I am very passionate about working with multi-disciplinary teams in projects 
                        involving engineering and many other sectors like economics, environment and social development. I have led successful teams 
                        with participants from different backgrounds and carreer paths.</p>
                    <p><span>SKILLS</span></p>
                    <ul className="bullet">
                        <li>Leadership and project management</li>
                        <li>Fast learning</li>
                        <li>Responsibility and organization</li>
                        <li>Creativity</li>
                        <li>Result and detail driven</li>
                        <li>Spanish, English and French</li>
                    </ul>
                </div>
            </div>
            <div className="aboutBotom">
                <FontAwesomeIcon icon={['fab', 'java']} className="aboutIcon" data-tip="Java"/>
                <FontAwesomeIcon icon={['fab', 'js']} className="aboutIcon" data-tip="JavaScript"/>
                <FontAwesomeIcon icon={['fab', 'html5']} className="aboutIcon" data-tip="HTML"/>
                <FontAwesomeIcon icon={['fab', 'css3-alt']} className="aboutIcon" data-tip="CSS"/>
                <FontAwesomeIcon icon={['fab', 'react']} className="aboutIcon" data-tip="React"/>
                <FontAwesomeIcon icon={['fab', 'node']} className="aboutIcon" data-tip="NodeJS"/>
                <FontAwesomeIcon icon={['fab', 'figma']} className="aboutIcon" data-tip="Figma"/>
                <FontAwesomeIcon icon={['fab', 'python']} className="aboutIcon" data-tip="Python"/>
                <FontAwesomeIcon icon={['fas', 'database']} className="aboutIcon" data-tip="SQL/NoSQL"/>
                <FontAwesomeIcon icon={['fab', 'swift']} className="aboutIcon" data-tip="Swift"/>
                <ReactTooltip place="bottom" type="dark" effect="float" backgroundColor='#839192' className="aboutTool"/>
            </div>
        </div>
    )
}

export default About
