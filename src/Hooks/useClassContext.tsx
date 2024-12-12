import { useContext } from 'react';
import { ClassContext } from '../Context/ClassProvider';

export const useClassContext = () => {
  const context = useContext(ClassContext);
  
  if (context === undefined) {
    throw new Error('useClassContext must be used within a ClassProvider');
  }
  
  return context;
};