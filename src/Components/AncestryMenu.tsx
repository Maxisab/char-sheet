// import { useClassContext } from "../Hooks/useClassContext";
import { useCharacterStore } from "../Store/CharacterStore";

const AncestryMenu = () => {
  // const { selectedClass } = useClassContext();
  const selectedClass = useCharacterStore (state => state.characterSheet.class);

  return (
    <div>
      AncestryMenu
      <p>{selectedClass?.name}</p>
    </div>
  )
}

export default AncestryMenu