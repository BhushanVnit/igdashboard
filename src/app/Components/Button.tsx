import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-indigo-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
};

interface ButtonProps {
  variant?: "solid" | "outline"; // Specify possible values for variant
  color?: "slate" | "blue" | "white"; // Specify possible values for color
  className?: string; // Specify type for className
  href?: string; // Specify type for href
}

export function Button({
  variant = "solid",
  color = "slate",
  className,
  href,
  ...props
}: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    getColorStyle(variant, color),
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}

function getColorStyle(variant: "solid" | "outline", color: "slate" | "blue" | "white"): string {
  const styles = variantStyles[variant];
  if ("blue" in styles) {
    return styles[color];
  } else {
    return styles.slate; // If color is not in styles, fallback to slate
  }
}
