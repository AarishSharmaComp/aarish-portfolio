import type { ReactNode } from "react";

export function ExternalAction({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <span className="action-disabled" title={`${label} URL not configured`}>
        {children} <small>add URL</small>
      </span>
    );
  }

  const isInternal = href.startsWith("/") || href.startsWith("#");

  return isInternal ? (
    <a href={href}>{children}</a>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
