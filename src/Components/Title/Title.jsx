import React from 'react'
import './Title.css'
const Title = (props) => {   //props or{subtitle,title} anythiing can be used
  return (
    <div className='title'>
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title
