import { cn } from "../styles";

export function PrimaryButton({
  href,
  children,
  download,
}: {
  href: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn.btnPrimary}
      download={download}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn.btnOutline}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function SmallCodeLink({
  href,
  children,
  disabled,
  disabledLabel,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  disabledLabel?: string;
}) {
  if (disabled) {
    return (
      <button
        type="button"
        disabled
        title={disabledLabel}
        aria-label={disabledLabel}
        className={`${cn.btnSmGhost} opacity-50 cursor-not-allowed hover:bg-brand-lavender/20`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn.btnSmGhost}>
      {children}
    </a>
  );
}

export function SmallPrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn.btnSmPrimary}>
      {children}
    </a>
  );
}
