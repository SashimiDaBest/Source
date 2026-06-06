import { cn } from "../styles";

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className={cn.sectionLabel}>{label}</p>
      <h1 className={cn.sectionTitle}>{title}</h1>
      {/* Amber + coral accent bars */}
      <div className="flex items-center gap-1 mt-2">
        <div className="h-0.5 w-8 rounded-full bg-brand-amber" />
        <div className="h-0.5 w-3 rounded-full bg-brand-coral" />
      </div>
    </div>
  );
}
