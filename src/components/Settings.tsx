import { User, Bell, Shield, FlaskConical, Database, CreditCard } from 'lucide-react';

export default function Settings() {
  const sections = [
    { id: 'profile', label: 'My Profile', icon: User, active: true },
    { id: 'notifications', label: 'Notifications', icon: Bell, active: false },
    { id: 'lab-defaults', label: 'Lab Defaults', icon: FlaskConical, active: false },
    { id: 'security', label: 'Security', icon: Shield, active: false },
    { id: 'billing', label: 'Billing & Plans', icon: CreditCard, active: false },
    { id: 'integrations', label: 'Integrations', icon: Database, active: false },
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Hero header */}
      <div className="bg-[#009AF1] rounded-[16px] p-8 text-white shadow-sm flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm font-medium mb-3">System Configuration</p>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Platform Settings</h1>
          <div className="flex items-center text-blue-100 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Manage your pathology center preferences and account configurations.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                section.active 
                  ? 'bg-white text-[#0070F3] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-200' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
              }`}
            >
              <section.icon className={`w-5 h-5 ${section.active ? 'text-[#0070F3]' : 'text-slate-400'}`} />
              {section.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">Profile Information</h2>
            </div>
            
            <div className="p-6">
                <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-[#F0F7FF] flex items-center justify-center border border-[#0070F3]/20 text-[#0070F3] text-2xl font-bold">
                    SJ
                </div>
                <div>
                    <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg font-medium transition-all shadow-sm mb-2 text-sm z-0">
                    Change Avatar
                    </button>
                    <p className="text-[13px] text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700">First Name</label>
                    <input 
                    type="text" 
                    defaultValue="Sarah"
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0070F3]/20 focus:border-[#0070F3] transition-all text-slate-800"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700">Last Name</label>
                    <input 
                    type="text" 
                    defaultValue="Jenkins"
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0070F3]/20 focus:border-[#0070F3] transition-all text-slate-800"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700">Email Address</label>
                    <input 
                    type="email" 
                    defaultValue="s.jenkins@pathosys.com"
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0070F3]/20 focus:border-[#0070F3] transition-all text-slate-800"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700">Role / Title</label>
                    <input 
                    type="text" 
                    defaultValue="Lead Pathologist"
                    readOnly
                    className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-not-allowed"
                    />
                </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button className="bg-[#009AF1] hover:bg-[#009AF1]/90 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-sm text-sm">
                    Save Changes
                </button>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
             <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">Lab Operations Preferences</h2>
             </div>
            <div className="p-6 space-y-6">
              {[
                { title: 'Auto-assign critical values for review', desc: 'Automatically flag severe deviations for lead pathologist review before release.' },
                { title: 'Enable SMS alerts for urgent specimens', desc: 'Receive immediate mobile notifications when stat requests are registered in the system.' },
                { title: 'Default Dashboard View', desc: 'Set the command center to open test queue instantly upon login.' }
              ].map((setting, i) => (
                <div key={i} className="flex items-start justify-between">
                  <div className="pr-4">
                    <p className="font-medium text-slate-800 mb-0.5">{setting.title}</p>
                    <p className="text-[13px] text-slate-500">{setting.desc}</p>
                  </div>
                  <div className="relative inline-block w-11 h-6 rounded-full bg-[#0070F3] flex-shrink-0 cursor-pointer transition-colors mt-1">
                    <span className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
