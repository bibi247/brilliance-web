/** Classic rule-diamond-rule divider, echoing the Brilliance diamond emblem. */
export default function Ornament({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px bg-current opacity-50" style={{ width: width / 2 }} />
      <svg width="14" height="12" viewBox="0 0 14 12" className="shrink-0"><path d="M3 .5h8L13.5 4 7 11.5.5 4z" fill="none" stroke="currentColor" strokeWidth=".8" /><path d="M.5 4h13M5 .5 7 4 9 .5M7 4v7.5" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".6" /></svg>
      <span className="h-px bg-current opacity-50" style={{ width: width / 2 }} />
    </span>
  );
}
