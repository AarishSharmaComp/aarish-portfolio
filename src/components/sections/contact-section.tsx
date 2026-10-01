import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ExternalAction } from "@/components/ui/external-action";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section">
      <div className="shell">
        <Reveal className="contact-panel">
          <div className="contact-grid-mark">
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
            Let&apos;s build
            <br />
            <em>something.</em>
          </h2>
          <p>
            Interested in collaborating, discussing a project, or talking about
            software development?
          </p>
          <div className="contact-actions">
            <span className="button button-primary">
              <ExternalAction
                href={siteConfig.links.linkedin.href}
                label="LinkedIn"
              >
                LinkedIn <Icon name="external" size={15} />
              </ExternalAction>
            </span>
            <span className="button button-ghost">
              <ExternalAction
                href={siteConfig.links.github.href}
                label="GitHub"
              >
                GitHub <Icon name="github" size={15} />
              </ExternalAction>
            </span>
            <span className="button button-ghost">
              <ExternalAction href={siteConfig.links.email.href} label="Email">
                Email <Icon name="mail" size={15} />
              </ExternalAction>
            </span>
            <span className="button button-ghost">
              <ExternalAction
                href={siteConfig.links.resume.href}
                label="Resume"
              >
                Resume <Icon name="external" size={15} />
              </ExternalAction>
            </span>
          </div>
          <small className="placeholder-note">
            Links are placeholders until the profiles are connected.
          </small>
        </Reveal>
      </div>
    </section>
  );
}
