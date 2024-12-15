import { useRef } from "react";
import { useEffect } from "react";
import { useClassContext } from "../Hooks/useClassContext";

export const CharacterSheet = () => {
    const { selectedClass } = useClassContext();
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (!selectedClass) {
            console.log("error: no class selected")
        } else {
          dialogRef.current?.showModal()
        }
    })

  return (
    <>
      <dialog ref={dialogRef}>
        Modal test
      </dialog>
      <div>
        <div className="genStats">
            {selectedClass?.name}
        </div>
        <div className="attributes">

        </div>
        <div className="skills">

        </div>
      </div>
    </>
  )
}
