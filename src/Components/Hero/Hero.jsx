import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me 1.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Jonah Sudhir,</span> AI Engineer based in India</h1>
      <p>I am a AI/ML developer from Punjab, India with 4 years of experience working with various technologies in Artificial Intelligence.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
