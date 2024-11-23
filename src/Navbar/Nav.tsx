interface NavProps {
  filterClasses: boolean;
  setFilterClasses: (value: boolean) => void;
}

export const Nav = ({ filterClasses, setFilterClasses }: NavProps) => {
  const handleToggle = () => setFilterClasses(!filterClasses);

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">Class Menu</h1>
      <div className="flex items-center gap-4">
        <span>Filter Core Classes</span>
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
  );
};
