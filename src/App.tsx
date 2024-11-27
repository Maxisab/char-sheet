
import { useState } from 'react'
import { Nav } from './Navbar/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  const [filterClasses, setFilterClasses] = useState(false)

  return (
    <>
      <Nav filterClasses={filterClasses} setFilterClasses={setFilterClasses} />
      <Outlet context={{ filterClasses, setFilterClasses }}/>
    </>
  )
}

export default App
