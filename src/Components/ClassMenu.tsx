import { useState } from 'react';
import { ClassData } from "../Types/classTypes";
import { classColors } from "../utils/classColors";

const classFiles = import.meta.glob('../data/classes/*.json', { eager: true });

interface ClassMenuProps {
  filterClasses: boolean;
}

const ClassMenu: React.FC<ClassMenuProps> = ({ filterClasses }) => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const classes: ClassData[] = Object.values(classFiles)
    .map(file => file as ClassData)
    .filter(classData =>
      filterClasses ? classData.system.publication.title === "Pathfinder Core Rulebook 2E" : true
    );

  const handleClassClick = (className: string) => {
    setSelectedClass(selectedClass === className ? null : className);
  };

  // Helper function to format key ability when two are present
  const formatKeyAbility = (keyAbility: { value: string[] }) => {
    return keyAbility.value.map(ability => ability.toUpperCase()).join(' or ');
  };

  // Helper function to remove the last <p> tag from description string
const removeLastPTag = (htmlString: string): string => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const pTags = tempDiv.querySelectorAll("p");
  if (pTags.length > 0) {
    pTags[pTags.length - 1].remove();
  }
  return tempDiv.innerHTML;
};

  return (
    <div className={`relative min-h-screen transition-all duration-300 ease-in-out ${selectedClass ? 'lg:grid lg:grid-cols-3' : ''}`}>
      {/* Classes List */}
      <div className={`transition-all duration-300 ease-in-out ${selectedClass ? 'lg:col-span-1' : 'lg:px-[25%]'}`}>
        <div className="text-black flex-col">
          {classes.map((classData) => (
            <div
              key={classData.name.toLowerCase()}
              onClick={() => handleClassClick(classData.name.toLowerCase())}
              className={`
                ${classColors[classData.name.toLowerCase()]} 
                p-4 bg-opacity-65
                flex flex-col cursor-pointer
                transition-all duration-300 ease
                ${selectedClass === classData.name.toLowerCase() ? 'min-h-fit' : 'h-20'}
              `}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">{classData.name}</span>
                </div>
                <span className="transform transition-transform duration-300">
                  {selectedClass === classData.name.toLowerCase() ? '▼' : '▶'}
                </span>
              </div>
              
              {/* Expandable Content - Mobile View */}
              {selectedClass === classData.name.toLowerCase() && (
                <div className="mt-4 lg:hidden">
                  <div className="space-y-4">
                    <div className="font-medium">
                      Key Ability: {formatKeyAbility(classData.system.keyAbility)}
                    </div>
                    <div className="font-medium">
                      Starting Hit Points: {classData.system.hp}
                    </div>
                    <div 
                      className="text-sm"
                      dangerouslySetInnerHTML={{ 
                        __html: removeLastPTag(classData.system.description.value) 
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Details Panel - Desktop View */}
      {selectedClass && (
        <div className="hidden lg:block lg:col-span-2 p-6 bg-gray-50">
          {classes.map((classData) => 
            classData.name.toLowerCase() === selectedClass && (
              <div key={`details-${classData.name}`} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">{classData.name}</h2>
                </div>
                <div className="space-y-4">
                  <div className="font-medium">
                    Key Ability: {formatKeyAbility(classData.system.keyAbility)}
                  </div>
                  <div className="font-medium">
                    Hit Points: {classData.system.hp}
                  </div>
                  <div 
                      className="text-sm"
                      dangerouslySetInnerHTML={{ 
                        __html: removeLastPTag(classData.system.description.value) 
                      }}
                    />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ClassMenu;