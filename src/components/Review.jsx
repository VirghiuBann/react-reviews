import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { FaQuoteRight } from 'react-icons/fa'

const Review = ({
  id,
  name,
  job,
  image,
  text,
  nextReview,
  prevReview,
  surpriseMe,
}) => {
  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <div>
        <h2 className='author'>{name}</h2>
        <h2 className='job'>{job}</h2>
        <p className='info'>{text}</p>
      </div>
      <div className='btn-container'>
        <button className='prev-btn' onClick={() => prevReview()}>
          <FaAngleLeft />
        </button>
        <button className='next-btn' onClick={() => nextReview()}>
          <FaAngleRight />
        </button>
      </div>
      <button className='btn btn-hipster' onClick={() => surpriseMe()}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review
