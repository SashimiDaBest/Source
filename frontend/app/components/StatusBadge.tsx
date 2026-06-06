import { cn } from "../styles";

export function StatusBadge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "review" | "prep";
}) {
  return (
    <span className={variant === "review" ? cn.badgeReview : cn.badgePrep}>
      {children}
    </span>
  );
}
