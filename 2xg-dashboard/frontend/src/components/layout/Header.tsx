import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder='Search in Customers ( / )'
              className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded text-gray-600">
              /
            </kbd>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              Z
            </div>
            <span className="font-medium text-gray-700">Zaheer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
