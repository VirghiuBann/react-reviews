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
    setPerson({ ...nextReview })
    setIndex(nextIndex)
  }

  return (
    <main>
      <section>
        {person && <Review {...person} index={index} nextReview={nextReview} />}
      </section>
    </main>
  )
}
export default App
