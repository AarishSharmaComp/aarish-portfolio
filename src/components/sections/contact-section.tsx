import { ContactForm } from "@/components/sections/contact-form";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section">
      <div className="shell">
        <div className="contact-layout">
          <Reveal className="contact-card contact-info-card">
            <div className="contact-grid-mark" aria-hidden="true">
              010
              <br />
              101
              <br />
              001
            </div>
            <div className="section-kicker">
              <span>06</span>
              <i />
              Open channel
            </div>
            <h2>
              Let&apos;s <em>Connect</em>
            </h2>
            <p className="contact-intro">
              I&apos;m always open to discussing software development,
              interesting projects, collaboration, and internship opportunities.
              If you&apos;d like to talk about my work or build something
              together, feel free to reach out.
            </p>
            <a className="email-contact" href={siteConfig.links.email.href}>
              <span className="contact-icon-box">
                <Icon name="mail" size={19} />
              </span>
              <span>
                <small>EMAIL</small>
                <strong>aarishcomp@gmail.com</strong>
              </span>
              <Icon name="arrow" size={16} />
            </a>
            <div className="social-row" aria-label="Social links">
              <a
                className="social-button"
                href={siteConfig.links.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Aarish Sharma's GitHub profile in a new tab"
              >
                <Icon name="github" size={19} />
              </a>
              <a
                className="social-button"
                href={siteConfig.links.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Aarish Sharma's LinkedIn profile in a new tab"
              >
                <Icon name="linkedin" size={19} />
              </a>
            </div>
          </Reveal>
          <Reveal className="contact-card contact-form-card" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
