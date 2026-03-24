import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-accent text-ink shadow-[0_14px_30px_rgba(233,170,41,0.28)] hover:-translate-y-0.5 hover:bg-accentDark",
  secondary:
    "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-accent/40 hover:bg-sand",
  ghost: "text-ink hover:text-accentDark"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const classNames = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return <button className={classNames}>{children}</button>;
}
