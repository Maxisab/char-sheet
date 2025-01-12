import { useState } from "react"
import { Outlet } from "react-router-dom"



const CharacterCreation = () => {
  const [filterClasses, setFilterClasses] = useState(false)

  return (
    <Outlet context={{ filterClasses, setFilterClasses }} />
  )
}

export default CharacterCreation