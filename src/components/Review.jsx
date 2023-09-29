import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { FaQuoteRight } from 'react-icons/fa'

const Review = ({ id, name, job, image, text }) => {
  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <div>
        <HiChevronLeft />
        <HiChevronRight />
      </div>
      <button className='btn'>Surprise Me</button>
    </article>
  )
}

export default Review
