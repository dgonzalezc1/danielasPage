import React from 'react'
import "./Experience.css"; 

function Experience() {
    return (
        <div className="Experience" id="Experience">
            <h3>Experience</h3>
            <div className="experienceContent">
                <div className="experienceContent-block">
                    <div className="col-md-3 experienceDate">
                        <p>Jan 2020 - Jul 2020</p>
                    </div>
                    <div className="col-md-9 experienceDetail">
                        <p className="experienceDetail-prin">Carvajal Tecnología y Servicios</p>
                        <p className="experienceDetail-sec">Engineering Intern</p>
                        <p className="experienceDetail-body">Development of strategic and innovative projects in multidisciplinary groups based on digital transformation and new technologies. I had a leadership role in the team responsible for the
                                development and implementation of functional prototypes, UX/UI and front-end development.</p>
                        <p className="experienceDetail-body">Preparation, documentation and presentation of several tenders for Colombia's Ministry of Science, Technology and Innovation.</p>
                    </div>
                </div>
                <div className="experienceContent-block">
                    <div className="col-md-3 experienceDate">
                        <p>Jan 2017 - Dec 2021</p>
                    </div>
                    <div className="col-md-9 experienceDetail">
                        <p className="experienceDetail-prin">Universidad de los Andes</p>
                        <p className="experienceDetail-sec">Junior Teaching Assistant</p>
                        <p className="experienceDetail-body">Worked as a teaching assistant for the courses Web Development, Product Design and IT Innovation, Mathematical Structures and Logic, Materials Science and Fundamentals of Experimentation. I helped on the realization and correction of assignments and exams and gave additional classes with the aim of improving students' results.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
