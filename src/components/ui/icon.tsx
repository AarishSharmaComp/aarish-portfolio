type IconName =
  | "arrow"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "menu"
  | "close"
  | "spark";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  const paths = {
    arrow: <path d="M5 12h13m-6-6 6 6-6 6" />,
    github: (
      <path
        d="M15 22v-3.9c.04-1.07-.42-1.83-1.15-2.2 3.8-.42 7.78-1.86 7.78-8.4 0-1.86-.66-3.38-1.75-4.57.18-.43.76-2.17-.17-4.52 0 0-1.43-.46-4.7 1.74a16.1 16.1 0 0 0-8.02 0C3.72-2.05 2.3-1.59 2.3-1.59c-.94 2.35-.35 4.1-.18 4.52A6.6 6.6 0 0 0 .37 7.5c0 6.53 3.97 7.98 7.76 8.4-.7.35-1.12 1.04-1.12 2.1V22"
        transform="translate(0 0) scale(.92)"
      />
    ),
    linkedin: <path d="M6 8v12M6 4v.01M11 20v-7a4 4 0 0 1 8 0v7m-8-7V9" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5M19 5l-8 8" />
        <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    spark: (
      <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" />
    ),
  };
  return (
    <svg
      {...common}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
