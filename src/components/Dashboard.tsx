import { Calendar, Package, AlertTriangle, XCircle, CalendarDays, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Hero header */}
      <div className="bg-gradient-to-r from-[#0070F3] via-[#009AF1] to-[#50C3FF] rounded-[16px] px-8 py-6 text-white shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-white/80 text-[13px] font-medium mb-1">Pathology Command Center</p>
            <h1 className="text-[26px] font-bold mb-1 tracking-tight">Good Afternoon, Pathologist</h1>
            <div className="flex items-center text-white/90 text-[14px]">
              <Calendar className="w-4 h-4 mr-1.5" />
              Monday, October 23, 2023
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[15px] font-semibold text-slate-500 mb-4 px-1">Overview</h2>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F0F7FF] text-[#0070F3]">
                 <Package className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#0070F3] text-sm font-medium">
                 <TrendingUp className="w-4 h-4 mr-1" /> +2.4%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Total tests processed</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">12,482</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#FFF9EB] text-[#F5B403]">
                 <AlertTriangle className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#F5B403] text-sm font-medium">
                 <TrendingUp className="w-4 h-4 mr-1" /> +1.8%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Critical samples</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">24</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
             <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#FFF0F4] text-[#E02424]">
                 <XCircle className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#E02424] text-sm font-medium">
                 <TrendingDown className="w-4 h-4 mr-1" /> -0.6%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Failed QC reports</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">08</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-start mb-4">
               <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#EBFDFB] text-[#00A99D]">
                 <CalendarDays className="w-5 h-5" />
               </div>
               <div className="flex items-center text-[#00A99D] text-sm font-medium">
                 <TrendingUp className="w-4 h-4 mr-1" /> +3.1%
               </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Turnaround due soon</p>
            <p className="text-[32px] font-bold text-slate-800 tracking-tight leading-none mt-2">116</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[15px] font-semibold text-slate-500 mb-4 px-1">Performance Insights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 pb-0 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start relative z-10 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Completed vs Pending Trend</h3>
                <p className="text-slate-500 text-sm mt-1">Weekly movement across active tests</p>
              </div>
              <div className="bg-[#EBFDFB] text-[#00A99D] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-1.5" /> +6.4% productivity
              </div>
            </div>
            
            {/* Chart placeholder mirroring the design */}
            <div className="relative h-[250px] w-full mt-auto flex items-end">
               {/* Y-axis labels */}
               <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-400">
                 <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
               </div>
               
               {/* Grid lines */}
               <div className="absolute left-8 right-0 top-2 bottom-8 flex flex-col justify-between z-0">
                 {[1,2,3,4].map(i => <div key={i} className="border-b border-slate-100 w-full"></div>)}
               </div>

               {/* Smooth Area Chart SVG mock */}
               <div className="ml-8 w-full h-[85%] relative z-10">
                 <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0070F3" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#0070F3" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,100 C100,80 200,110 300,90 C400,60 500,20 600,40 C700,70 800,80 800,80 L800,200 L0,200 Z" fill="url(#gradient)" />
                    <path d="M0,100 C100,80 200,110 300,90 C400,60 500,20 600,40 C700,70 800,80 800,80" fill="none" stroke="#0070F3" strokeWidth="3" />
                 </svg>
               </div>
               
                {/* X-axis labels */}
               <div className="absolute left-8 right-0 bottom-2 flex justify-between text-xs text-slate-400 font-medium px-4">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-lg font-bold text-slate-800">Category Trend</h3>
              <BarChart3 className="w-5 h-5 text-[#0070F3]" />
            </div>

            <div className="flex-1 flex items-end justify-between px-2 mb-8 relative">
               {/* Y-axis labels */}
               <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400">
                 <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
               </div>
               {/* Bars */}
               <div className="ml-6 flex-1 flex justify-around items-end h-full mt-2">
                 <div className="w-[18%] bg-[#0070F3] rounded-t-lg h-[92%] relative group">
                   <div className="absolute -bottom-6 w-full text-center text-[11px] text-slate-500">Hemato</div>
                 </div>
                 <div className="w-[18%] bg-[#0070F3] rounded-t-lg h-[75%] relative group">
                   <div className="absolute -bottom-6 w-full text-center text-[11px] text-slate-500">Biochem</div>
                 </div>
                 <div className="w-[18%] bg-[#0070F3] rounded-t-lg h-[85%] relative group">
                   <div className="absolute -bottom-6 w-full text-center text-[11px] text-slate-500">Histo</div>
                 </div>
                 <div className="w-[18%] bg-[#0070F3] rounded-t-lg h-[89%] relative group">
                   <div className="absolute -bottom-6 w-full text-center text-[11px] text-slate-500">Micro</div>
                 </div>
               </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
              <span className="text-sm text-slate-500">Fastest Growth</span>
              <span className="text-sm font-bold text-[#00A99D]">Hematology +9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}