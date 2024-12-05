import { useLocation } from "react-router-dom";

interface NavProps {
  filterClasses: boolean;
  setFilterClasses: (value: boolean) => void;
}

export const Nav = ({ filterClasses, setFilterClasses }: NavProps) => {
  const handleToggle = () => setFilterClasses(!filterClasses);
  const location = useLocation()

  return (
    <nav>
      {location.pathname === '/' && (
        <div className="text-center p-4 bg-gray-800 text-primary-parchment fixed top-0 w-full">ClassFinder 2E Remaster</div>
      )}
      {location.pathname === '/class-menu' && (
        <div className="flex items-center justify-between bg-gray-800 p-4 text-primary-parchment fixed top-0 w-full z-50">
        <h1 className="text-lg font-bold">Select a class</h1>
        <div className="flex items-center gap-4">
          <span>Filter Remaster</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterClasses}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:bg-blue-600 rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
        </div>
      )}
    </nav>
  )
}
