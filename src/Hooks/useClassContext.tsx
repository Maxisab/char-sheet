import { useContext } from 'react';
import { ClassContext } from '../Context/ClassProvider'; // Import the context from the context file

export const useClassContext = () => {
  const context = useContext(ClassContext);
  
  if (context === undefined) {
    throw new Error('useClassContext must be used within a ClassProvider');
  }
  
  return context;
};