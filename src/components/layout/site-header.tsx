"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "DSA", href: "#dsa" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner shell">
        <Link
          href="#home"
          className="logo"
          aria-label="Aarish Sharma home"
          onClick={() => setOpen(false)}
        >
          <span>{siteConfig.logo}</span>
          <i aria-hidden="true" />
        </Link>
        <nav
          className={`desktop-nav ${open ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="header-cta"
          onClick={() => setOpen(false)}
        >
          Let&apos;s talk <Icon name="arrow" size={15} />
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
