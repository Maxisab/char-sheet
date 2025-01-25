import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";
import { useCharacterStore } from "../Store/CharacterStore";

const CharacterSheet = () => {
    const selectedClass = useCharacterStore (state => state.characterSheet.class);
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