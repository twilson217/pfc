import React from 'react';
import { Bell, User, Sun, Moon } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Header() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b dark:border-slate-700 fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <div className="text-xl font-semibold text-slate-800 dark:text-white">
          Welcome back, Admin
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            )}
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full relative">
            <Bell className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg">
            <User className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            <span className="text-sm text-slate-600 dark:text-slate-200">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;