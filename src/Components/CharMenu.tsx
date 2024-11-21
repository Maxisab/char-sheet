import { ClassData } from "../Types/classTypes"
import { classColors } from "../utils/classColors";
const classFiles = import.meta.glob('../data/classes/*.json', { eager: true });


export const CharMenu = () => {
  

  const classes: ClassData[] = Object.values(classFiles).map(file => file as ClassData);

  return (
    <div className="text-black *:h-20 flex-col *:flex *:justify-center *:items-center">
      {classes.map((classData) => (
        <div 
          key={classData.name.toLowerCase()} 
          className={`${classColors[classData.name.toLowerCase()]} p-4`}
        >
          {classData.name}
        </div>
      ))}
    </div>
  )
}