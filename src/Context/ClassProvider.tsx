import React, { 
    createContext, 
    useState, 
    ReactNode, 
    useCallback 
  } from 'react';
  import { ClassData } from '../Types/classTypes';
  
  // Define the shape of the context
  interface ClassContextType {
    selectedClass: ClassData | null;
    setSelectedClass: (classData: ClassData | null) => void;
    clearSelectedClass: () => void;
  }
  
  // Create the context with a default value
    const ClassContext = createContext<ClassContextType>({
    selectedClass: null,
    setSelectedClass: () => {},
    clearSelectedClass: () => {}
  });
  
  // Provider component
  export const ClassProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  
    // Memoized setter to prevent unnecessary re-renders
    const handleSetSelectedClass = useCallback((classData: ClassData | null) => {
      setSelectedClass(classData);
    }, []);
  
    // Method to clear the selected class
    const clearSelectedClass = useCallback(() => {
      setSelectedClass(null);
    }, []);
  
    return (
      <ClassContext.Provider 
        value={{ 
          selectedClass, 
          setSelectedClass: handleSetSelectedClass,
          clearSelectedClass 
        }}
      >
        {children}
      </ClassContext.Provider>
    );
  };

  export {ClassContext}