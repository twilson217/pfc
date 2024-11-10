import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  Calculator, 
  MessageSquareCode,
  Settings,
  Home
} from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', to: '/' },
    { icon: Users, label: 'Customers', to: '/customers' },
    { icon: Building2, label: 'Projects', to: '/projects' },
    { icon: Calculator, label: 'Pricing', to: '/pricing' },
    { icon: MessageSquareCode, label: 'AI Designer', to: '/designer' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 dark:bg-slate-950 text-white fixed left-0 top-0 p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Building2 className="h-8 w-8 text-blue-400" />
        <h1 className="text-xl font-bold">Post Frame Cloud</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 dark:hover:bg-slate-900'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;