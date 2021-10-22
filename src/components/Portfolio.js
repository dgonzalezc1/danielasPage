import React from 'react'
import "./Portfolio.css"; 
import itti from "../Assets/ITTI.png";
import handuty from "../Assets/Handuty.png";
import match from "../Assets/2Match.png";

function Portfolio() {
    return (
        <div className="Portfolio" id="Portfolio">
            <h3>Portfolio</h3>
            <div className="portfolioProject">
                <div className="projectText">
                    <p className="projectText-princ">ITTI - Entrepreneurship and Innovation Project</p>
                    <p className="projectText-sub">Front Development, UX Case Study, UI Design, Product Management</p>
                    <p className="projectText-body">I am a co-founder of ITTI, a startup in construction that aims to build bridges between distant worlds in Colombia so that different societies can grow and coexist harmoniously. The first step towards this mission is a platform that integrates local commerce, digital transformation, and the diversity of tastes where Colombian jewelers and artisans can connect with potential customers to sell their products.</p>
                    <p className="projectText-body">I have work as general manager and in product, UX/UI, and front development. We are currently at the MVP/Validation stage which was made with React, Express and MongoDB. With ITTI we won the popular category award in the Innovation Week of the Universides de los Andes, we were also 6th a the rector's challenge, InnoTIC100M, competing for 30,000 dollars. We are currently participating in the START Fellowship acceleration program.</p>
                </div>
                <div className="projectImage">
                    <img className="projectImage-img" src={itti} alt="ITTI" />
                </div>
            </div>
            <div className="portfolioProject">
                <div className="projectText">
                    <p className="projectText-princ">Handuty - Web Development Course</p>
                    <p className="projectText-sub">Full-Stack Development, UI Design</p>
                    <p className="projectText-body">I was part of a team of 5 that designed and created a web platform using modern technologies and tools to connect general service providers with clients interested in hiring occasional jobs.</p>
                    <p className="projectText-body">For this, I created a design system with color palette, fonts, style and designed a prototype with Figma. Based on this prototype we build the frontend with React. As for the backend, we used a documental NoSQL database with MongoDB and Express.js. We deploy this page on AWS.</p>
                </div>
                <div className="projectImage">
                    <img className="projectImage-img" src={handuty} alt="ITTI" />
                </div>
            </div>
            <div className="portfolioProject">
                <div className="projectText">
                    <p className="projectText-princ">2Match - Carvajal Tecnología y Servicios</p>
                    <p className="projectText-sub">Front Development, UX/UI Design, Product</p>
                    <p className="projectText-body">During my professional internship, I was part of a Digital Innovation School where I was on both the UX/UI and Tech teams, especially in front development. Our main project was a a fintech product for massive management of discounts for prompt payment through a web page that optimizes the invoice negotiation processes.</p>
                    <p className="projectText-body">My participation in the project was from the ideation, definition of the problem and research to validation with users, going through the design of the architecture and the data model. For the UX/UI design we mainly used Figma to build the prototype in order to be able to make early tests with stakeholders. For the frontend we used Nuxt.js, a framework based on Vue.js. </p>
                </div>
                <div className="projectImage">
                    <img className="projectImage-img" src={match} alt="ITTI" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
