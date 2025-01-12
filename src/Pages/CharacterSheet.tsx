import { useEffect, useState } from "react";
import { useClassContext } from "../Hooks/useClassContext";
import Modal from "../Modals/Modal";

const CharacterSheet = () => {
    const { selectedClass } = useClassContext();
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (!selectedClass) {
            console.log("error: no class selected")
        } else {
          setIsModalOpen(true)
        }
    }, [selectedClass])

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2>Test Modal</h2>
        <p>Here's some text for the test modal</p>
        <button
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
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

export default CharacterSheet