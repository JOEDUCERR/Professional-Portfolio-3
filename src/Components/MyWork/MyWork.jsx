import React, { useEffect } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          // comment out next line if you want animation every time
          observer.unobserve(entry.target)
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title hidden">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container hidden">
        {mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt='' />
        })}
      </div>
      <a href='https://github.com/JOEDUCERR' target='_blank' rel='noopener noreferrer' className='mywork-showmore hidden'>
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </a>
    </div>
  )
}

export default MyWork
