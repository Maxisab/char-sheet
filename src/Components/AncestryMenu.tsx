import { useClassContext } from "../Hooks/useClassContext";

const AncestryMenu = () => {
  const { selectedClass } = useClassContext();

  return (
    <div>
      AncestryMenu
      <p>{selectedClass?.name}</p>
    </div>
  )
}

export default AncestryMenu