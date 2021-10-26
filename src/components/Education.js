import React from 'react'
import "./Education.css"; 

function Education() {
    return (
        <div className="Education" id="Education">
            <h3>Education</h3>
            <hr/>
            <div className="educationSection">
                <h4>DEGREES</h4>
                <div className="educationRow">
                    <div className="educationRow-bloc">
                        <p className="educationRow-bloc-tit">B.Sc. Mechanical Engineering</p>
                        <p>Universidad de los Andes</p>
                        <p>2016-2021</p>
                    </div>
                    <div className="educationRow-bloc">
                        <p className="educationRow-bloc-tit">B.Sc. Computer Science</p>
                        <p>Universidad de los Andes</p>
                        <p>2016-2021</p>
                    </div>
                </div>
            </div>
            <div className="educationSection second">
                <h4>ADDITIONAL COURSES</h4>
                <div className="educationRow">
                    <div className="educationRow-bloc">
                        <p className="educationRow-bloc-tit">Innovation and Digital Transformation Diplomat</p>
                        <p>Borealis Innovation Colombia</p>
                        <p>2020</p>
                    </div>
                    <div className="educationRow-bloc">
                        <p className="educationRow-bloc-tit">Digital Marketing Diplomat</p>
                        <p>Carvajal Tecnología y Servicios</p>
                        <p>2020</p>
                    </div>
                    <div className="educationRow-bloc">
                        <p className="educationRow-bloc-tit">Introduction to Aerospace Engineering</p>
                        <p>MIT (Mooc Edx)</p>
                        <p>2015</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
