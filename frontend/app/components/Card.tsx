import { cn } from "../styles";

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`${hover ? cn.cardHover : cn.card} p-6 ${className}`}>
      {children}
    </div>
  );
}
