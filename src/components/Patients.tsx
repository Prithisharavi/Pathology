import { useState } from 'react';
import { Search, Plus, Filter, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Patients() {
  const [activeTab, setActiveTab] = useState('All Patients');

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Hero header */}
      <div className="bg-gradient-to-r from-[#0070F3] via-[#009AF1] to-[#50C3FF] rounded-[16px] p-8 text-white shadow-sm flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm font-medium mb-3">Hospital Management</p>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Patient Directory</h1>
          <div className="flex items-center text-blue-100 text-sm">
            <FileText className="w-4 h-4 mr-2" />
            Comprehensive patient records and interaction history.
          </div>
        </div>
        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
          <Plus className="w-4 h-4" />
          Add Patient
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Header Controls */}
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
          <div className="flex gap-6">
            {['All Patients', 'Inpatient', 'Outpatient'].map((tab) => (
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
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search patients..." 
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0070F3]/20 focus:border-[#0070F3] transition-all w-64 text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-slate-500 text-[13px] border-b border-slate-100">
                <th className="px-6 py-4 font-medium">Patient Information</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Reg. Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Michael Chen', id: 'PT-8921', initials: 'MC', color: 'bg-emerald-400', phone: '+1 (555) 123-4567', email: 'm.chen@email.com', date: 'Oct 22, 2023', status: 'Active' },
                { name: 'Sarah Connor', id: 'PT-8922', initials: 'SC', color: 'bg-blue-400', phone: '+1 (555) 987-6543', email: 'sarah.c@email.com', date: 'Oct 23, 2023', status: 'Inactive' },
                { name: 'James Wilson', id: 'PT-8923', initials: 'JW', color: 'bg-indigo-400', phone: '+1 (555) 456-7890', email: 'j.wilson@email.com', date: 'Oct 24, 2023', status: 'Active' },
              ].map((row, i) => (
                <tr key={`row-${i}`} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${row.color}`}>
                        {row.initials}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-[15px]">{row.name}</p>
                        <p className="text-[13px] text-slate-400 mt-0.5">ID: #{row.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[14px] text-slate-700">{row.phone}</p>
                    <p className="text-[13px] text-slate-400 mt-0.5">{row.email}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <p className="text-[14px] text-slate-700">{row.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                      ${row.status === 'Active' ? 'bg-[#EBFDFB] text-[#00A99D]' : 'bg-slate-100 text-slate-500'}
                    `}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#0070F3] hover:text-blue-700 text-sm font-medium transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-white">
          <span>Showing 1 to 10 of 124 patients</span>
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
