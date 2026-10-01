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

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
