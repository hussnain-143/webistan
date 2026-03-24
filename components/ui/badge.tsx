type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentDark ${className}`}
    >
      {children}
    </span>
  );
}
