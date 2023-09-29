import React from 'react'

const Review = ({ id, name, job, image, text }) => {
  return (
    <article>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <button className='btn'>Surprise Me</button>
    </article>
  )
}

export default Review
