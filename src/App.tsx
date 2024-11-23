
import { useState } from 'react'
import ClassMenu from './Components/ClassMenu'
import { Nav } from './Navbar/Nav'

function App() {
  const [filterClasses, setFilterClasses] = useState(false)

  return (
    <>
      <Nav filterClasses={filterClasses} setFilterClasses={setFilterClasses} />
      <ClassMenu filterClasses={filterClasses} />
    </>
  )
}

export default App
