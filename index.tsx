import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Activity, 
  Target, 
  ShieldCheck, 
  PieChart, 
  Printer,
  MapPin,
  HeartPulse,
  Info,
  ChevronRight,
  List,
  AlertTriangle,
  Coins,
  BarChart3,
  CheckCircle2,
  BookOpen,
  ArrowRightCircle,
  Stethoscope,
  Scale,
  Loader2
} from 'lucide-react';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="border-b-4 border-blue-900 pb-4 mb-8 flex justify-between items-end">
    <div>
      <h1 className="text-2xl font-bold uppercase tracking-wider">{title}</h1>
      {subtitle && <p className="text-teal-600 font-medium">{subtitle}</p>}
    </div>
    <div className="text-right text-gray-400 text-xs italic">
      Confidential Business Plan
    </div>
  </div>
);

const Footer = ({ pageNumber }: { pageNumber: number }) => (
  <div className="absolute bottom-10 left-20 right-20 flex justify-between items-center text-xs text-gray-400 border-t pt-4">
    <div>Everyday Care Plus Ltd — CIC #Pending</div>
    <div>Page {pageNumber}</div>
    <div>January 2026</div>
  </div>
);

const SectionTitle = ({ children, icon: Icon, id }: { children?: React.ReactNode; icon?: any; id?: string }) => (
  <h2 id={id} className="text-xl font-bold border-l-4 border-teal-500 pl-3 mt-8 mb-4 flex items-center gap-2 scroll-mt-20">
    {Icon && <Icon size={20} className="text-teal-600" />}
    {children}
  </h2>
);

const Figure1 = () => (
  <div className="chart-container">
    <p className="text-sm font-bold text-center mb-6 text-blue-900 uppercase tracking-tight">Figure 1: UK Domiciliary Care Demand Drivers</p>
    <div className="flex items-end justify-around h-40 gap-6 px-4">
      {[
        { label: 'Ageing Pop.', value: 90, color: '#1e3a8a', percentage: 'High' },
        { label: 'NHS Pressure', value: 82, color: '#0d9488', percentage: 'Critical' },
        { label: 'Home Pref.', value: 95, color: '#334155', percentage: 'Dominant' }
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center group">
          <div className="mb-2 text-[10px] font-bold text-gray-600">{bar.percentage}</div>
          <div 
            className="w-full rounded-t shadow-sm transition-all duration-300 hover:opacity-80"
            style={{ height: `${bar.value}%`, backgroundColor: bar.color }}
          ></div>
          <span className="text-[10px] mt-3 font-bold text-gray-700 text-center leading-tight">{bar.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Figure2 = () => {
  const points = [
    { x: 10, y: 110, label: '£3k' },
    { x: 44, y: 100 },
    { x: 78, y: 90 },
    { x: 112, y: 80 },
    { x: 146, y: 70 },
    { x: 180, y: 60, label: '£15k' },
    { x: 214, y: 50 },
    { x: 248, y: 40 },
    { x: 282, y: 30 },
    { x: 316, y: 20 },
    { x: 350, y: 15 },
    { x: 384, y: 10, label: '£37k' }
  ];

  return (
    <div className="chart-container">
      <p className="text-sm font-bold text-center mb-6 text-blue-900 uppercase tracking-tight">Figure 2: Year 1 Projected Cash Balance Trend</p>
      <svg viewBox="0 0 400 130" className="w-full overflow-visible">
        {[0, 25, 50, 75, 100].map((line) => (
          <line key={line} x1="0" y1={line} x2="400" y2={line} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
        ))}
        <path 
          d={`M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`} 
          fill="none" 
          stroke="#0d9488" 
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="white" stroke="#1e3a8a" strokeWidth="2" />
            {p.label && (
              <text x={p.x} y={p.y - 12} fontSize="10" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">
                {p.label}
              </text>
            )}
          </g>
        ))}
        <text x="10" y="125" fontSize="9" fill="#94a3b8" textAnchor="start">M1</text>
        <text x="384" y="125" fontSize="9" fill="#94a3b8" textAnchor="end">M12</text>
      </svg>
    </div>
  );
};

const Figure3 = () => (
  <div className="chart-container">
    <p className="text-sm font-bold text-center mb-6 text-blue-900 uppercase tracking-tight">Figure 3: Break-Even Capacity & Safety Margin</p>
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-bold text-gray-500 uppercase">Annual Hours Capacity</span>
          <span className="text-sm font-black text-teal-700">5,824 Hours</span>
        </div>
        <div className="relative h-6 w-full bg-teal-50 rounded-lg overflow-hidden border border-teal-100 shadow-inner">
          <div className="absolute inset-y-0 left-0 bg-teal-500 w-full" />
          <div className="absolute inset-y-0 left-[21.8%] w-0.5 bg-white/50 border-r border-dashed border-blue-900 z-10" />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-bold text-gray-500 uppercase">Break-Even (BEP)</span>
          <span className="text-sm font-black text-blue-900">1,269 Hours</span>
        </div>
        <div className="h-6 w-full bg-blue-50 rounded-lg overflow-hidden border border-blue-200 shadow-inner flex">
          <div className="bg-blue-900 w-[21.8%] flex items-center justify-end pr-2">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
          </div>
          <div className="flex-1 flex items-center px-4">
             <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">78% Margin of Safety</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const tocItems = [
    { label: "1. Introduction", id: "introduction" },
    { label: "2. Business Background and Market Context", id: "background" },
    { label: "3. Business Risks and Funding Strategy", id: "risks" },
    { label: "4. Cost Structure and Cost Behaviour", id: "costs" },
    { label: "5. Budgeted Profit Forecast", id: "profit" },
    { label: "6. Cash Flow Forecast", id: "cashflow" },
    { label: "7. Break-Even Point and Margin of Safety", id: "breakeven" },
    { label: "8. Key Performance Indicators", id: "kpis" },
    { label: "9. Recommendations and Conclusion", id: "conclusion" },
    { label: "10. References", id: "references" }
  ];

  return (
    <div className="main-wrapper min-h-screen py-8">
      <div className="no-print fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
        <button 
          onClick={handlePrint}
          className="bg-blue-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-800 transition-all transform hover:scale-105 active:scale-95 group"
        >
          {isPrinting ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Printer size={20} className="group-hover:animate-pulse" />
          )}
          <span className="font-bold">{isPrinting ? 'Printing...' : 'Export PDF'}</span>
        </button>
        <div className="bg-white/90 backdrop-blur-sm border border-blue-200 p-3 rounded-xl shadow-lg max-w-xs text-[10px] text-blue-800 flex gap-2 items-center">
          <Info size={14} className="flex-shrink-0 text-teal-600" />
          <p>
            Standard A4 210x297mm layout. Use <strong>Save as PDF</strong> in the print dialog.
          </p>
        </div>
      </div>

      {/* PAGE 1: COVER & TABLE OF CONTENTS */}
      <div className="a4-page">
        <div className="flex flex-col h-full">
          <div className="mt-16 mb-16 text-center">
            <div className="flex justify-center mb-6">
               <HeartPulse size={80} className="text-teal-600" />
            </div>
            <h1 className="text-5xl font-black text-blue-900 tracking-tight mb-2 uppercase">Everyday Care Plus Ltd</h1>
            <h2 className="text-2xl text-teal-700 font-bold mb-4">Business Plan</h2>
            <p className="text-gray-500 font-medium mb-10 text-lg">Business Finance for Managers (BFA438/QHO422)</p>
            <div className="w-40 h-1.5 bg-blue-900 mx-auto mb-10"></div>
            <div className="max-w-xs mx-auto text-lg font-bold text-blue-900 bg-gray-50 py-3 rounded-xl border border-gray-100 uppercase tracking-[0.2em] shadow-sm">
              January 2026
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 p-12 rounded-[40px] shadow-sm flex-1">
            <h2 className="text-lg font-black text-blue-900 uppercase tracking-[0.3em] mb-10 flex items-center gap-4 border-b border-blue-200 pb-5">
              <List size={24} className="text-teal-600" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 gap-y-5">
              {tocItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={`#${item.id}`} 
                  className="flex justify-between items-center group transition-all hover:text-teal-600 no-print"
                >
                  <span className="text-base font-bold text-gray-700 group-hover:text-blue-900 flex items-center gap-4">
                    <span className="text-teal-600/30 text-xs w-6">{idx + 1}</span>
                    {item.label}
                  </span>
                  <div className="flex-1 border-b border-dotted border-gray-200 mx-6 opacity-40 group-hover:opacity-100"></div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-teal-600 transform group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
              <div className="hidden print:block space-y-5">
                {tocItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-700">{item.label}</span>
                    <div className="flex-1 border-b border-dotted border-gray-200 mx-6 opacity-30"></div>
                    <span className="text-sm font-black text-blue-900">P. {idx + 2}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 text-[11px] text-gray-400 font-black uppercase tracking-[0.2em] text-center border-t border-gray-100 pt-10">
            <div className="flex items-center justify-center gap-3"><MapPin size={16} className="text-teal-600" /> Sandwell & Dudley</div>
            <div className="flex items-center justify-center gap-3"><ShieldCheck size={16} className="text-teal-600" /> CIC Registered</div>
          </div>
          <Footer pageNumber={1} />
        </div>
      </div>

      {/* PAGE 2: INTRODUCTION & BACKGROUND */}
      <div className="a4-page">
        <Header title="1. Introduction" subtitle="Corporate Strategy" />
        <SectionTitle id="introduction" icon={FileText}>1. Introduction</SectionTitle>
        <div className="text-gray-700 leading-relaxed text-sm space-y-4">
          <p>This business plan evaluates the financial viability of Everyday Care Plus Ltd, a start-up domiciliary care provider serving Sandwell and Dudley in the West Midlands. The plan demonstrates financial sustainability through structured analysis of costs, revenue projections, and risk management strategies appropriate for a regulated, labour-intensive sector.</p>
          <p>The analysis examines the business model, identifies key operational and financial risks, evaluates cost behaviour, and presents first-year profit and cash flow forecasts. Break-even analysis assesses volume risk, while balanced scorecard indicators monitor financial and non-financial performance. Conservative assumptions underpin all projections to ensure realistic expectations. The plan confirms that the business can achieve profitability while delivering high-quality, person-centred care services within a challenging regulatory environment.</p>
        </div>

        <SectionTitle id="background" icon={Target}>2. Business Background and Market Context</SectionTitle>
        <div className="text-gray-700 leading-relaxed text-sm space-y-4">
          <p>Everyday Care Plus Ltd provides domiciliary care services to clients requiring support to live independently at home. Core services include personal care, dementia support, learning disability assistance, companionship, and end-of-life care. The business operates as a Community Interest Company (CIC), prioritising quality and social value over profit maximisation, which aligns with Care Quality Commission (CQC) expectations.</p>
          <div className="grid grid-cols-2 gap-8 items-center py-6 bg-gray-50/50 rounded-2xl px-6 my-4 border border-gray-100">
            <div className="space-y-4">
              <p>The UK domiciliary care sector faces sustained demand growth driven by an ageing population, NHS capacity constraints, and preference for home-based care over residential settings. Sandwell and Dudley have above-average elderly populations and significant pressure on hospital discharge pathways, creating strong local demand for private home care services.</p>
            </div>
            <Figure1 />
          </div>
          <p>The competitive landscape includes national franchises and independent agencies. While competition is high, many providers struggle with staff shortages, high turnover, and inconsistent quality, creating opportunities for quality-focused entrants. Everyday Care Plus Ltd differentiates through longer visit times, continuity of carers, enhanced training, and competitive staff pay rates. This quality-led strategy targets private-paying clients who prioritise reliability and personalised care over low-cost provision, positioning the business to achieve sustainable growth in a fragmented market.</p>
        </div>
        <Footer pageNumber={2} />
      </div>

      {/* PAGE 3: RISKS & COST STRUCTURE */}
      <div className="a4-page">
        <Header title="3. Risks & Cost Structure" subtitle="Financial Resilience" />
        <SectionTitle id="risks" icon={AlertTriangle}>3. Business Risks and Funding Strategy</SectionTitle>
        
        <h3 className="text-sm font-black text-blue-900 uppercase mt-4 mb-2">3.1 Key Business Risks</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 space-y-3">
            <div className="flex gap-3">
              <Coins className="text-red-600 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-[11px] font-bold text-red-900 uppercase">Wage Inflation</h4>
                <p className="text-[10px] text-red-800">Labour-intensive model creates vulnerability to NLW increases and pay pressures.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="text-red-600 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-[11px] font-bold text-red-900 uppercase">Staff Retention</h4>
                <p className="text-[10px] text-red-800">High turnover increases recruitment costs and impacts service continuity.</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 space-y-3">
            <div className="flex gap-3">
              <ShieldCheck className="text-red-600 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-[11px] font-bold text-red-900 uppercase">Regulatory Risk</h4>
                <p className="text-[10px] text-red-800">CQC compliance failure risk impacting reputation and registration status.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Activity className="text-red-600 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-[11px] font-bold text-red-900 uppercase">Cash Flow Risk</h4>
                <p className="text-[10px] text-red-800">Timing gap between weekly payroll and monthly client payment cycles.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 italic mb-6">These risks are mitigated through competitive pay, proactive supervision, strict compliance procedures, and adequate cash reserves. Performance monitoring using financial and non-financial KPIs enables early risk identification and corrective action.</p>

        <h3 className="text-sm font-black text-blue-900 uppercase mb-2">3.2 Funding Strategy</h3>
        <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100 mb-8">
          <p className="text-sm text-teal-900 leading-relaxed font-medium">Initial funding of <span className="font-black">£15,000</span> is sourced entirely from owner's equity (personal savings). This approach avoids debt-related risks such as interest payments and fixed obligations, reducing financial pressure during start-up and improving operational flexibility. As the business stabilises, additional funding options may be considered for expansion.</p>
        </div>

        <SectionTitle id="costs" icon={TrendingUp}>4. Cost Structure and Cost Behaviour</SectionTitle>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">Understanding cost behaviour is critical for pricing decisions, break-even analysis, and financial control in a labour-intensive service environment.</p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-bold text-blue-900 uppercase mb-3 border-b pb-1">4.1 Fixed Costs</h3>
            <table className="text-[11px]">
              <tbody>
                <tr><td>Insurance</td><td className="text-right">£2,000</td></tr>
                <tr><td>Accounting fees</td><td className="text-right">£1,200</td></tr>
                <tr><td>Software systems</td><td className="text-right">£1,500</td></tr>
                <tr><td>Marketing</td><td className="text-right">£2,000</td></tr>
                <tr><td>Office equipment</td><td className="text-right">£1,500</td></tr>
                <tr><td>Registration costs</td><td className="text-right">£1,000</td></tr>
                <tr className="total-row"><td><strong>Total Fixed Costs</strong></td><td className="text-right"><strong>£9,200</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xs font-bold text-blue-900 uppercase mb-3 border-b pb-1">4.2 Variable Costs</h3>
            <table className="text-[11px]">
              <tbody>
                <tr><td>Carer wages (/hr)</td><td className="text-right">£12.50</td></tr>
                <tr><td>ER NI & Pension (/hr)</td><td className="text-right">£3.00</td></tr>
                <tr><td>Mileage reimb. (/hr)</td><td className="text-right">£1.75</td></tr>
                <tr><td>PPE/Consumables (/hr)</td><td className="text-right">£0.50</td></tr>
                <tr className="total-row"><td><strong>Total Variable Costs</strong></td><td className="text-right"><strong>£17.75</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer pageNumber={3} />
      </div>

      {/* PAGE 4: COST IMPLICATIONS & PROFIT FORECAST */}
      <div className="a4-page">
        <Header title="4. Cost Logic & 5. Profit" subtitle="Performance Projection" />
        
        <SectionTitle icon={Info}>4.3 Cost Behaviour Implications</SectionTitle>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-sm text-gray-700 space-y-4">
          <p>The cost structure features low fixed costs and high variable costs, creating moderate contribution margins but significant operational flexibility. Costs rise and fall with demand, limiting financial exposure during low-activity periods. However, reliance on variable labour costs creates vulnerability to wage inflation and recruitment pressures. Effective labour cost management is essential for profitability.</p>
          <p>This structure supports a low break-even point and reduces loss risk during start-up, aligning with the strategic goal of financial resilience while maintaining quality care delivery.</p>
        </div>

        <SectionTitle id="profit" icon={Coins}>5. Budgeted Profit Forecast</SectionTitle>
        
        <h3 className="text-sm font-black text-blue-900 uppercase mt-4 mb-3">5.1 Revenue and Cost Assumptions</h3>
        <div className="text-sm text-gray-700 space-y-4 mb-6">
          <p>Conservative first-year projections assume four clients averaging 28 care hours weekly each, totalling 5,824 annual hours. The £25.00 hourly rate is competitive within the local private-pay market and covers labour costs while generating positive contribution. Variable costs of £17.75/hour primarily comprise staff wages and on-costs. Fixed costs total £9,200.</p>
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mb-4">5.2 Profit Forecast</h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Table 1: Budgeted Profit Forecast - Year 1</p>
        <table className="text-sm">
          <thead>
            <tr><th>Item</th><th>Calculation</th><th className="text-right">Amount (£)</th></tr>
          </thead>
          <tbody>
            <tr><td>Total Care Hours</td><td>4 clients × 28 hrs/week × 52 weeks</td><td className="text-right">5,824 hours</td></tr>
            <tr><td>Revenue</td><td>5,824 hours × £25.00</td><td className="text-right">145,600</td></tr>
            <tr className="text-red-600"><td>Variable Costs</td><td>5,824 hours × £17.75</td><td className="text-right">(103,372)</td></tr>
            <tr className="bg-teal-50 font-black text-teal-900"><td><strong>Contribution</strong></td><td>Revenue - Variable Costs</td><td className="text-right">42,228</td></tr>
            <tr className="text-red-600"><td>Fixed Costs</td><td>Annual total</td><td className="text-right">(9,200)</td></tr>
            <tr className="total-row text-xl font-black"><td><strong>NET PROFIT</strong></td><td>Contribution - Fixed Costs</td><td className="text-right">33,028</td></tr>
          </tbody>
        </table>
        <div className="mt-2 text-right">
           <span className="bg-teal-600 text-white px-3 py-1 rounded text-xs font-black uppercase tracking-widest">Net Profit Margin: 22.7%</span>
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mt-8 mb-3">5.3 Profitability Evaluation</h3>
        <p className="text-sm text-gray-700 leading-relaxed">The forecast demonstrates first-year viability with healthy contribution coverage of fixed costs and substantial surplus. The 22.7% net profit margin reflects lean fixed costs and careful pricing. However, profitability remains sensitive to wage inflation and utilisation rates. Reduced care hours or increased labour costs would erode contribution and delay profitability, emphasising the importance of staff retention, efficient scheduling, and consistent client occupancy for sustained performance.</p>
        
        <Footer pageNumber={4} />
      </div>

      {/* PAGE 5: CASH FLOW FORECAST */}
      <div className="a4-page">
        <Header title="6. Cash Flow Forecast" subtitle="Liquidity Management" />
        <SectionTitle id="cashflow" icon={BarChart3}>6. Cash Flow Forecast</SectionTitle>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">Cash flow analysis evaluates liquidity during year one, critical in sectors where staff wages precede client payments.</p>

        <h3 className="text-sm font-black text-blue-900 uppercase mb-3">6.1 Cash Flow Assumptions</h3>
        <div className="text-sm text-gray-700 space-y-4 mb-6">
          <p>An initial £15,000 equity injection provides start-up capital. Client payments are received one month in arrears, meaning no operating income in month one. Monthly revenue thereafter averages £12,000. Month one includes higher outflows for registration, insurance, software, and marketing. Ongoing monthly outflows of approximately £10,000 cover wages, variable costs, and allocated fixed costs.</p>
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mb-4">6.2 Cash Flow Summary</h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Table 2: First Year Cash Flow Summary</p>
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-7">
            <table className="text-xs">
              <thead>
                <tr><th>Month</th><th>Cash In</th><th>Cash Out</th><th>Balance</th></tr>
              </thead>
              <tbody>
                <tr><td>Month 1</td><td>£15k (Eq)</td><td>£12,000</td><td>£3,000</td></tr>
                <tr><td>Month 2</td><td>£12,000</td><td>£10,000</td><td>£5,000</td></tr>
                <tr><td>M3 - M12</td><td>£12k /mo</td><td>£10k /mo</td><td>Progressive</td></tr>
                <tr className="total-row font-black"><td><strong>Year End</strong></td><td><strong>£159,000</strong></td><td><strong>£122,000</strong></td><td><strong>£37,000</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-5">
            <Figure2 />
          </div>
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mt-8 mb-3">6.3 Liquidity Evaluation</h3>
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm text-gray-700 space-y-4">
          <p>The lowest balance occurs in month one when start-up costs are incurred before income arrives. The £15,000 capital adequately absorbs early outflows without creating shortfalls. From month two onwards, consistent positive cash flows steadily build balances, confirming the business can meet wage commitments and operating expenses without external finance.</p>
          <p>However, payment delays or unexpected cost increases could temporarily reduce balances, highlighting the need for contingency reserves and monthly cash monitoring. Overall, the cash position is strong and supports sustainable operations.</p>
        </div>
        
        <Footer pageNumber={5} />
      </div>

      {/* PAGE 6: BREAK-EVEN & KPIs */}
      <div className="a4-page">
        <Header title="7. Break-Even & 8. KPIs" subtitle="Risk & Monitoring Framework" />
        <SectionTitle id="breakeven" icon={Scale}>7. Break-Even Point and Margin of Safety</SectionTitle>
        <p className="text-sm text-gray-700 mb-6">Break-even analysis determines the activity level required to cover all costs, assessing operational risk for a start-up in a labour-intensive sector.</p>

        <div className="grid grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-blue-900 uppercase mb-3">7.1 Break-Even Point</h3>
            <div className="bg-gray-50 p-4 rounded-xl text-xs space-y-1 font-mono border border-gray-100">
               <div>Selling Price: £25.00</div>
               <div>Variable Cost: £17.75</div>
               <div>Contribution: £7.25</div>
               <div className="border-t pt-1 mt-1 font-bold text-blue-900">BEP = £9,200 ÷ £7.25</div>
            </div>
            <div className="bg-blue-900 text-white p-4 rounded-2xl shadow-lg">
              <div className="text-[10px] uppercase font-black opacity-60">Break-Even Point</div>
              <div className="text-2xl font-black">1,269 Hours</div>
              <div className="text-xs opacity-80 mt-1">£31,725 Revenue Threshold</div>
            </div>
            <p className="text-xs text-gray-700">At 1,269 hours annually, the business covers all costs without profit or loss. This represents approximately <strong>22%</strong> of projected annual hours (5,824).</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-black text-blue-900 uppercase mb-3">7.2 Margin of Safety</h3>
            <div className="bg-teal-600 text-white p-4 rounded-2xl shadow-lg">
              <div className="text-[10px] uppercase font-black opacity-60">Margin of Safety</div>
              <div className="text-2xl font-black">78%</div>
              <div className="text-xs opacity-80 mt-1">Exceptional Resilience</div>
            </div>
            <p className="text-xs text-gray-700"><strong>Margin of Safety = (£145,600 - £31,725) ÷ £145,600 × 100 = 78%</strong></p>
            <Figure3 />
          </div>
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mt-8 mb-3">7.3 Risk Interpretation</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-8">The 78% margin of safety indicates exceptional financial resilience. Revenue could fall by over three-quarters before reaching break-even, providing substantial protection against demand fluctuations, temporary client loss, or staffing challenges. The low break-even point reflects the lean fixed-cost structure, which minimises volume risk during start-up. However, these calculations assume stable pricing and controlled labour costs. Significant wage increases or reduced hours would elevate break-even and reduce safety margins, reinforcing the importance of cost discipline, staff retention, and regular financial monitoring.</p>

        <SectionTitle id="kpis" icon={Activity}>8. Key Performance Indicators</SectionTitle>
        <p className="text-sm text-gray-700 mb-6">Performance monitoring uses a balanced scorecard framework evaluating financial and non-financial dimensions critical for sustainable, quality-focused domiciliary care.</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="text-[11px] font-black text-blue-900 uppercase mb-3 flex items-center gap-2"><Coins size={14} className="text-teal-600" /> 8.1 Financial</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Net Profit Margin</span><span className="font-bold">≥20%</span></div>
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Contribution/Hr</span><span className="font-bold">≥£7.00</span></div>
              <div className="flex justify-between text-[11px]"><span>Monthly Cash</span><span className="font-bold">Positive</span></div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="text-[11px] font-black text-blue-900 uppercase mb-3 flex items-center gap-2"><Users size={14} className="text-teal-600" /> 8.2 Customer</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Client Satisfaction</span><span className="font-bold">≥90%</span></div>
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Complaints</span><span className="font-bold">≤1/Qtr</span></div>
              <div className="flex justify-between text-[11px]"><span>Carer Continuity</span><span className="font-bold">≥80%</span></div>
            </div>
          </div>
        </div>
        <Footer pageNumber={6} />
      </div>

      {/* PAGE 7: KPIs CONTINUED, RECOMMENDATIONS & CONCLUSION */}
      <div className="a4-page">
        <Header title="8. KPIs & 9. Conclusion" subtitle="Final Professional Assessment" />
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="text-[11px] font-black text-blue-900 uppercase mb-3 flex items-center gap-2"><Stethoscope size={14} className="text-teal-600" /> 8.3 Internal Ops</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Missed/Late Visits</span><span className="font-bold">Zero</span></div>
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Medication Errors</span><span className="font-bold">≤1/Period</span></div>
              <div className="flex justify-between text-[11px]"><span>Rota Efficiency</span><span className="font-bold">≥90%</span></div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="text-[11px] font-black text-blue-900 uppercase mb-3 flex items-center gap-2"><ArrowRightCircle size={14} className="text-teal-600" /> 8.4 Growth</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] border-b pb-1"><span>Training Comp.</span><span className="font-bold">100%</span></div>
              <div className="flex justify-between text-[11px]"><span>Staff Retention</span><span className="font-bold">≥85%</span></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 mt-4 italic mb-8">Monthly KPI monitoring enables proactive management, early risk identification, and continuous improvement aligned with both financial objectives and quality care commitments.</p>

        <SectionTitle id="conclusion" icon={CheckCircle2}>9. Recommendations and Conclusion</SectionTitle>
        
        <h3 className="text-sm font-black text-blue-900 uppercase mt-4 mb-4">9.1 Recommendations</h3>
        <div className="grid grid-cols-1 gap-3 mb-8">
          {[
            { title: "Maintain Lean Fixed Costs", text: "Avoid unnecessary overheads during early operations to preserve the low break-even point and protect profitability during demand fluctuations." },
            { title: "Prioritise Staff Retention", text: "Invest in competitive pay, training, and supervision to reduce turnover, lower recruitment costs, and maintain service continuity." },
            { title: "Implement Monthly Financial Monitoring", text: "Track contribution per hour, profit margins, and cash balances monthly to enable early identification of cost pressures." },
            { title: "Build Cash Reserves", text: "Allocate monthly surplus to contingency reserves, providing protection against delayed payments or unexpected costs." }
          ].map((rec, i) => (
            <div key={i} className="flex gap-4 items-start bg-blue-50/30 p-4 rounded-xl border border-blue-100">
              <div className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black">{i+1}</div>
              <div>
                <h4 className="text-[11px] font-black text-blue-900 uppercase">{rec.title}</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">{rec.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-black text-blue-900 uppercase mb-3">9.2 Conclusion</h3>
        <div className="bg-blue-900 text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden mb-12">
          <HeartPulse className="absolute -right-6 -bottom-6 text-white/10" size={160} />
          <p className="text-sm leading-relaxed opacity-95 font-medium relative z-10 italic">
            "This analysis demonstrates that Everyday Care Plus Ltd is financially viable and operationally sustainable. Conservative first-year projections show £33,028 net profit with strong cash flow, supported by a low break-even point (1,269 hours) and exceptional margin of safety (78%). Overall, Everyday Care Plus Ltd is well-positioned to achieve financial sustainability while delivering high-quality, person-centred care services in a challenging and highly regulated sector."
          </p>
        </div>

        <SectionTitle id="references" icon={BookOpen}>10. References</SectionTitle>
        <div className="text-[11px] text-gray-400 italic space-y-2 border-t pt-4">
          <p>[References to be completed following Harvard Solent referencing standard, including sources used for market research, sector benchmarks, regulatory requirements, and financial planning guidance]</p>
        </div>

        <div className="mt-auto pt-10 flex justify-between items-center opacity-30 border-t">
           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Formal Business Submission</div>
           <HeartPulse size={24} className="text-gray-400" />
        </div>
        <Footer pageNumber={7} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
