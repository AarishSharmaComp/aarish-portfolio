import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span className="logo">{siteConfig.logo}</span>
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className="footer-status">
          <i /> Open to building interesting systems
        </span>
        <a href="#home" aria-label="Back to top">
          <Icon name="arrow" size={15} />
        </a>
      </div>
    </footer>
  );
}
