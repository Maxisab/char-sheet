import { useEffect } from "react";
import { useClassContext } from "../Hooks/useClassContext";

export const CharacterSheet = () => {
    const { selectedClass } = useClassContext();

    useEffect(() => {
        if (selectedClass) {
            console.log('Selected Class:', selectedClass)
        }
    })

  return (
    <div>
        <div className="genStats">
            {/* {selectedClass?.system.hp} */}
        </div>
        <div className="attributes">

        </div>
        <div className="skills">

        </div>
    </div>
  )
}
