import { cn } from "../styles";

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className={cn.tagAmber}>{children}</span>;
}

export function TagMuted({ children }: { children: React.ReactNode }) {
  return <span className={cn.tagLavender}>{children}</span>;
}

export function TagWhite({ children }: { children: React.ReactNode }) {
  return <span className={cn.tagWhite}>{children}</span>;
}
