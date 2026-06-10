import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Variant = "signature" | "dark" | "light" | "glass" | "ghost";

type PremiumButtonProps = {
  children: ReactNode;
  href?: string;
  icon?: LucideIcon;
  variant?: Variant;
  compact?: boolean;
  className?: string;
  ariaLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  signature: "btn-signature",
  dark: "btn-dark",
  light: "btn-light",
  glass: "btn-glass",
  ghost: "btn-ghost"
};

export function PremiumButton({
  children,
  href,
  icon: Icon,
  variant = "dark",
  compact = false,
  className = "",
  ariaLabel,
  ...buttonProps
}: PremiumButtonProps) {
  const classNames = `btn-core ${variantClasses[variant]} ${compact ? "btn-compact" : ""} ${className}`;
  const content = (
    <>
      {Icon ? (
        <span className="btn-icon-slot">
          <Icon size={16} />
        </span>
      ) : null}
      <span className="btn-label">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classNames} {...buttonProps}>
      {content}
    </button>
  );
}

type IconButtonProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  variant?: "light" | "glass" | "favorite";
  className?: string;
};

const iconVariantClasses = {
  light: "icon-action-light",
  glass: "icon-action-glass",
  favorite: "icon-action-light icon-action-favorite"
};

export function IconButton({ icon: Icon, label, href, variant = "light", className = "" }: IconButtonProps) {
  const classNames = `icon-action ${iconVariantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label={label} title={label} className={classNames}>
        <Icon size={18} />
      </Link>
    );
  }

  return (
    <button type="button" aria-label={label} title={label} className={classNames}>
      <Icon size={18} />
    </button>
  );
}

export function SegmentedControl({
  items,
  active = 0,
  tone = "plain",
  className = ""
}: {
  items: string[];
  active?: number;
  tone?: "plain" | "light";
  className?: string;
}) {
  return (
    <div className={`segmented-control segmented-${tone} ${className}`} role="tablist">
      {items.map((item, index) => (
        <button
          type="button"
          key={item}
          aria-pressed={index === active}
          className={`segmented-option ${index === active ? "is-active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function FilterPill({
  children,
  active = false,
  icon: Icon
}: {
  children: ReactNode;
  active?: boolean;
  icon?: LucideIcon;
}) {
  return (
    <button type="button" aria-pressed={active} className={`filter-pill ${active ? "is-active" : ""}`}>
      {Icon ? <Icon size={14} /> : null}
      {children}
    </button>
  );
}

