import React from 'react'
import "./About.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJava, faJs, faHtml5, faCss3Alt, faReact, faNode, faFigma, faPython, faSwift } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import pdf from "../Assets/CVDownload.pdf";

library.add(faJava, faJs, faHtml5, faCss3Alt, faReact, faNode, faFigma, faPython, faDatabase, faSwift);

function About() {
    return (
        <div className="About" id="About">
            <div className="aboutTop">
                <div className="aboutTop-tit">
                    <h3>About</h3>
                </div>
                <div className="aboutTop-txt">
                    <p>I'm a versatile and curious newly graduated engineer from Universidad de los Andes, Colombia, seeking to design efficient, innovative and sustainable solutions. I am very passionate about working with multi-disciplinary teams in projects involving engineering, design and many other sectors like economics, environment and social development. I love learning new things and challenging myself to explore areas outside of my comfort zone.</p>
                    {/*<p><span>SKILLS</span></p>
                    <ul className="bullet">
                        <li>Versatile and curious</li>
                        <li>Highly organized</li>
                        <li>Critical and strategical thinker</li>
                        <li>Team player</li>
                        <li>Creative</li>
                        <li>Result driven</li>
                        <li>Agile methodologies</li>
                        <li>Fluent in Spanish, English and French</li>
                    </ul>*/}
                    <p><span>ACHIEVEMENTS</span></p>
                    <ul className="bullet">
                        <li>Winner of a scholarship to be part of the START Fellowship program in St Gallen, Switzerland, for entrepreneurial students from Latin America. 2022</li>
                        <li>Top 6 in InnoTIC100M, a challenge from Univerisdad de los Andes looking for the best ICT-based innovation solutions that seek to promote the industry and infrastructure of Latin America towards a resilient and sustainable future. 2021</li>
                        <li>Prize awarded as winning project in the Innovation Week of the Universidad de los Andes. 2021</li>
                        <li>Excellence Award for the best average of the year in the scientific class. 2015</li>
                    </ul>
                    <a href={pdf} download="DanielaGonzalezCV" target='_blank' rel="noreferrer">Download CV</a>
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
