import { useEffect, useState } from 'react'
import reviews from './data.js'
import Review from './components/Review.jsx'

const App = () => {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const firstPerson = reviews[0]
    setPerson({ ...firstPerson })
  }, [])

  return (
    <main>
      <section>{person && <Review {...person} />}</section>
    </main>
  )
}
export default App
