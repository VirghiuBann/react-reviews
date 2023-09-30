import { useEffect, useState } from 'react'
import reviews from './data.js'
import Review from './components/Review.jsx'

const App = () => {
  const [person, setPerson] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const firstPerson = reviews[0]
    setPerson({ ...firstPerson })
  }, [])

  const nextReview = (currentIndex) => {
    let nextIndex = ++currentIndex
    nextIndex = nextIndex < reviews.length ? nextIndex : 0
    const nextReview = reviews[nextIndex]
    updateReview(nextIndex, nextReview)
  }
  const prevReview = (currentIndex) => {
    let previousIndex = --currentIndex
    previousIndex = currentIndex >= 0 ? currentIndex : reviews.length - 1
    const nextReview = reviews[previousIndex]
    updateReview(previousIndex, nextReview)
  }

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(reviews.length))
    const randomReview = reviews[randomIndex]
    updateReview(randomIndex, randomReview)
  }

  const updateReview = (index, review) => {
    setPerson({ ...review })
    setIndex(index)
  }

  return (
    <main>
      <section>
        {person && (
          <Review
            {...person}
            index={index}
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
