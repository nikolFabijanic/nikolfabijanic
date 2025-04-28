import React from 'react'

function ProjectItems({ lable, title, description }) {
  return (
    <div className='projectItem'>
      <p> {lable} </p>
      <h1> {title} </h1>
      <p> {description} </p>
    </div>
  )
}

export default ProjectItems
