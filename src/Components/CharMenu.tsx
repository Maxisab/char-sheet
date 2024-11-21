import { ClassData } from "../Types/classTypes"
const classFiles = import.meta.glob('../data/classes/*.json', { eager: true });


export const CharMenu = () => {

  const classes: ClassData[] = Object.values(classFiles).map(file => file as ClassData);

  return (
    <div className="text-blue-500 *:h-20 flex-col *:flex *:justify-center *:items-center">
      {classes.map((classData) => (
        <div 
          key={classData.name.toLowerCase()} 
          className={classData.name.toLowerCase()}
        >
          {classData.name}
        </div>
      ))}
    </div>
  )
}