export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="p-6 md:p-10 max-w-3xl">{children}</div>;
}
