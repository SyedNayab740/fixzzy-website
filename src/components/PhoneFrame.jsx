export default function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative w-[280px] h-[570px] rounded-[2.75rem] bg-[#0c0c0c] p-[10px] shadow-2xl ${className}`}>
      <div className="relative w-full h-full rounded-[2.25rem] bg-white overflow-hidden flex flex-col">
        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-[#14231a] shrink-0">
          <span>5:41</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-5 bg-[#0c0c0c] rounded-full" />
          <span className="flex items-center gap-1">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect width="2" height="4" y="6" fill="#14231a" rx="0.5"/><rect width="2" height="6" x="4" y="4" fill="#14231a" rx="0.5"/><rect width="2" height="8" x="8" y="2" fill="#14231a" rx="0.5"/><rect width="2" height="10" x="12" y="0" fill="#14231a" rx="0.5"/></svg>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0.5" y="0.5" width="13" height="10" rx="2.5" stroke="#14231a"/><rect x="2" y="2" width="10" height="7" rx="1.5" fill="#14231a"/><rect x="14" y="3.5" width="1.5" height="4" fill="#14231a"/></svg>
          </span>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
