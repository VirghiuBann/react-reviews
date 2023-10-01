import { useState } from 'react'
import reviews from './data.js'
import Review from './components/Review.jsx'

const App = () => {
  const [index, setIndex] = useState(0)
  const person = reviews[index]

  const nextReview = () => {
    setIndex((oldIndex) => {
      let nextIndex = oldIndex + 1
      nextIndex = nextIndex < reviews.length ? nextIndex : 0
      return nextIndex
    })
  }
  const prevReview = () => {
    setIndex((oldIndex) => {
      let previousIndex = oldIndex - 1
      previousIndex = previousIndex >= 0 ? previousIndex : reviews.length - 1
      return previousIndex
    })
  }

  const surpriseMe = () => {
    setIndex((oldIndex) => {
      let randomIndex = getRandomIndex()
      while (oldIndex === randomIndex) {
        randomIndex = getRandomIndex()
      }
      return randomIndex
    })
  }

  const getRandomIndex = () => {
    return Math.floor(Math.random() * Math.floor(reviews.length))
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
