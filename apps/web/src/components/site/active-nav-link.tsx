"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
  onClick?: () => void;
  indicator?: "outside" | "inside" | "none";
};

export function ActiveNavLink({
  href,
  children,
  className,
  activeClassName = "",
  inactiveClassName = "",
  exact = false,
  onClick,
  indicator = "outside",
}: ActiveNavLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  const indicatorClass =
    isActive && indicator === "outside"
      ? "after:absolute after:bottom-[-0.45rem] after:left-1/2 after:h-[2px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-[#10233f] after:content-['']"
      : isActive && indicator === "inside"
        ? "after:absolute after:bottom-[0.32rem] after:left-1/2 after:h-[2px] after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-[#10233f] after:content-['']"
        : "";

  const finalClassName = [
    className,
    "relative",
    isActive ? activeClassName : inactiveClassName,
    indicatorClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={finalClassName}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}