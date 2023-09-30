import { useState } from 'react'
import reviews from './data.js'
import Review from './components/Review.jsx'

const App = () => {
  const [index, setIndex] = useState(0)
  const person = reviews[index]

  const nextReview = () => {
    let nextIndex = index + 1
    nextIndex = nextIndex < reviews.length ? nextIndex : 0
    updateIndex(nextIndex)
  }
  const prevReview = () => {
    let previousIndex = index - 1
    previousIndex = previousIndex >= 0 ? previousIndex : reviews.length - 1
    updateIndex(previousIndex)
  }

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(reviews.length))
    updateIndex(randomIndex)
  }

  const updateIndex = (newIndex) => {
    setIndex(newIndex)
  }

  return (
    <main>
      <section>
        {person && (
          <Review
            {...person}
            prevReview={prevReview}
            nextReview={nextReview}
            surpriseMe={surpriseMe}
          />
        )}
      </section>
    </main>
  )
}
export default App
