export default function SectionLabel({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4${centered ? " justify-center" : ""}`}>
      <span className="w-6 h-[2px] bg-green" />
      <span className="text-green text-sm font-medium uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}
