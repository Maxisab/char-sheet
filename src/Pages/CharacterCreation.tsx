// import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { OutleContextType } from "../Types/OutletContextTypes"



const CharacterCreation = () => {
  // const [filterClasses, setFilterClasses] = useState(false)
  const { filterClasses } = useOutletContext<OutleContextType>()


  return (
    <Outlet context={{ filterClasses }} />
  )
}

export default CharacterCreation