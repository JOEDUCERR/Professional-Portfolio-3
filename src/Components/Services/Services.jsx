import React, { useEffect } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=>observer.observe(el))

    return () => {
      hiddenElements.forEach((el)=> observer.unobserve(el))
    }
    
  }, [])


  return (
    <div id='services' className='services'>
      <div className="services-title hidden">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
            return <a key={index} href={service.s_link} target='_blank' rel='noopener noreferrer' className='services-format hidden'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='service-readmore hidden'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </a>
        })}
      </div>
    </div>
  )
}

export default Services
