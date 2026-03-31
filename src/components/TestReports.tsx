import { useState } from 'react';
import { Plus, Clock, CheckCircle, Printer, Eye, TrendingUp, ChevronLeft, ChevronRight, CheckSquare } from 'lucide-react';

export default function TestReports() {
  const [activeTab, setActiveTab] = useState('All Orders');

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Hero header */}
      <div className="bg-[#009AF1] rounded-[16px] p-8 text-white shadow-sm flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm font-medium mb-3">Pathology Command Center</p>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Diagnostic Queue</h1>
          <div className="flex items-center text-blue-100 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            Manage and process active clinical orders in real-time.
          </div>
        </div>
        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
          <Plus className="w-4 h-4" />
          + New report
        </button>
      </div>

       {/* Stats row */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F0F7FF] text-[#0070F3]">
                 <TrendingUp className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#0070F3] text-[13px] font-medium">
                 <TrendingUp className="w-3.5 h-3.5 mr-1" /> +12.0%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Total today</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">142</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#FFF9EB] text-[#F5B403]">
                 <Clock className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#F5B403] text-[13px] font-medium">
                 <TrendingUp className="w-3.5 h-3.5 mr-1" /> +4.5%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Pending</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">28</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
             <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#EBFDFB] text-[#00A99D]">
                 <CheckCircle className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#00A99D] text-[13px] font-medium">
                 <TrendingUp className="w-3.5 h-3.5 mr-1" /> +2.1%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Under review</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">15</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F0F7FF] text-[#0070F3]">
                 <CheckSquare className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#0070F3] text-[13px] font-medium">
                 <TrendingUp className="w-3.5 h-3.5 mr-1" /> +8.2%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Completed today</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">99</p>
          </div>
        </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Tabs */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex gap-6">
            {['All Orders', 'Inpatient', 'Outpatient', 'Stat Orders'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium transition-all pb-4 -mb-4 border-b-2 ${
                  activeTab === tab
                    ? 'border-[#0070F3] text-[#0070F3]'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-sm text-slate-500 flex items-center gap-2">
            Sort by: <select className="bg-transparent font-medium text-slate-700 outline-none"><option>Time (Recent First)</option></select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-slate-500 text-[13px] border-b border-slate-100">
                <th className="px-6 py-4 font-medium">Patient Details</th>
                <th className="px-6 py-4 font-medium">Ordered By</th>
                <th className="px-6 py-4 font-medium">Tests</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Eleanor Shellstrop', initials: 'ES', meta: 'ID: #PT-9902 · Female, 32', doctor: 'Dr. Aris Thorne', dept: 'Cardiology', test: 'Complete Blood Count', time: 'Ordered 12 mins ago', status: 'Pending', statusColor: 'amber' },
                { name: 'Arthur Morgan', initials: 'AM', meta: 'ID: #PT-8812 · Male, 45', doctor: 'Dr. Lisa Cuddy', dept: 'Internal Medicine', test: 'Lipid Panel (3 items)', time: 'Ordered 28 mins ago', status: 'Processing', statusColor: 'blue' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white
                        ${row.initials === 'ES' ? 'bg-[#93C5FD]' : 'bg-[#C4B5FD]'}
                      `}>
                        {row.initials}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-[15px]">{row.name}</p>
                        <p className="text-[13px] text-slate-400 mt-0.5">{row.meta}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[15px] font-bold text-slate-800">{row.doctor}</p>
                    <p className="text-[13px] text-slate-400 mt-0.5">{row.dept}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[15px] font-bold text-slate-800">{row.test}</p>
                    <p className="text-[13px] text-slate-400 mt-0.5">{row.time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                      ${row.statusColor === 'amber' ? 'bg-[#FFF9EB] text-[#F5B403]' : 'bg-[#F0F7FF] text-[#0070F3]'}
                    `}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3 justify-end text-slate-400">
                      <button className="hover:text-slate-600"><Printer className="w-4 h-4" /></button>
                      <button className="hover:text-slate-600"><Eye className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-white">
          <span>Showing 1 to 10 of 28 pending reports</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded text-slate-400 cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded bg-[#0070F3] text-white font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded hover:bg-slate-50 text-slate-700 font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded hover:bg-slate-50 text-slate-700 font-medium">3</button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded hover:bg-slate-50 text-slate-700"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}