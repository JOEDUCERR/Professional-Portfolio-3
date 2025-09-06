import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Joey 1.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced AI/ML developer with over half a decade of learning experience and gaining expertise in the field. Throughout my journey I have built multiple projects of great value.</p>
                <p>My passion for AI/ML is not only seen in my willingness to learn but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Machine Learning</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Deep Learning</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>OpenCV</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>LLM Integration</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
