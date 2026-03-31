import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, Settings, Search, Bell, Activity, Menu, LogOut } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  const renderNavLink = (path: string, icon: any, label: string) => {
    const isActive = location.pathname.includes(path);
    const Icon = icon;
    return (
      <NavLink
        to={path}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-medium text-sm ${
          isActive 
            ? 'bg-[#EBF5FF] text-[#0070F3]' 
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
        }`}
      >
        <Icon className={`w-5 h-5 ${isActive ? 'text-[#0070F3]' : 'text-slate-400'}`} strokeWidth={isActive ? 2.5 : 2} />
        {label}
      </NavLink>
    );
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden text-slate-800 font-sans">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-slate-200 flex flex-col z-10 shrink-0 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.05)]">
        <div className="h-[72px] flex items-center px-6 border-b border-transparent">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0070F3] rounded-xl flex items-center justify-center text-white font-bold text-xl leading-none shadow-sm">
              +
            </div>
            <div>
              <div className="text-[#0070F3] font-bold text-sm tracking-tight leading-tight">MoviCloud Labs</div>
              <div className="text-slate-400 text-[10px] leading-tight">Hospital management system</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
          <div>
            <div className="text-xs font-semibold text-slate-400 mb-3 px-2">Overview</div>
            {renderNavLink('/pathologist/dashboard', LayoutDashboard, 'Dashboard')}
          </div>
          <div>
             <div className="text-xs font-semibold text-slate-400 mb-3 px-2">Clinical Care</div>
            {renderNavLink('/pathologist/test-reports', ClipboardList, 'Test Reports')}
          </div>
          <div>
             <div className="text-xs font-semibold text-slate-400 mb-3 px-2">Intelligence</div>
            {renderNavLink('/pathologist/patients', Activity, 'Analytics')}
            {renderNavLink('/pathologist/settings', Settings, 'AI Insights')}
          </div>
        </nav>

        <div className="p-5 border-t border-slate-100">
           <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full bg-[#0070F3] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                 SJ
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-800 leading-tight">Dr. Sarah Jenkins</div>
                 <div className="text-xs text-slate-500 leading-tight mt-0.5">Senior Pathologist</div>
               </div>
             </div>
             <LogOut className="w-4 h-4 text-slate-400" />
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Topbar */}
        <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-6 flex-1">
            <Menu className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
            <div className="max-w-[480px] w-full relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search reports, batches, or patients..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0070F3]/20 focus:border-[#0070F3] transition-all text-sm h-10 text-slate-600 placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 ml-4">
             <button className="relative text-slate-400 hover:text-slate-600 transition-all p-1">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
            <Activity className="w-5 h-5 text-slate-400" />
            <div className="text-sm border-l border-slate-200 pl-5 flex items-center">
              <span className="text-slate-600 font-medium">Senior Pathologist</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto bg-[#F8FAFC]">
          <Outlet />
        </div>
        
         {/* Floating Chat Button */}
        <button className="absolute bottom-6 right-6 w-[56px] h-[56px] bg-[#0070F3] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-50 group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 group-hover:scale-110 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-[3px] border-white"></span>
        </button>
      </main>
    </div>
  );
};

export default Layout;