import { Package, Truck, Headphones, Users } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Package, label: 'ERP Section', path: '#erp' },
    { icon: Truck, label: '2XG Logistics', path: '#logistics' },
    { icon: Headphones, label: '2XG CARE', path: '#care' },
    { icon: Users, label: 'Sales Pipeline', path: '#crm' }
  ];

  return (
    <aside className="w-64 bg-slate-800 min-h-screen text-white flex-shrink-0">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">2XG Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">Business Suite</p>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors border-l-4 border-transparent hover:border-blue-500"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
