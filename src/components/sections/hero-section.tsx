import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ExternalAction } from "@/components/ui/external-action";

export function HeroSection() {
  return (
    <section id="home" className="hero-section section-grid">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="availability">
              <span className="pulse-dot" />{" "}
              <span>Available for opportunities</span>
            </div>
            <p className="hero-eyebrow">01 / developer portfolio</p>
            <h1>
              AARISH
              <br />
              <em>SHARMA</em>
            </h1>
            <p className="hero-role">
              B.Tech CSE Student <span>·</span> Backend / Full-Stack Developer
            </p>
            <p className="hero-intro">
              Building backend systems, cloud applications, and AI-powered
              products with a focus on thoughtful engineering and useful
              software.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#projects">
                View projects <Icon name="arrow" size={16} />
              </Link>
              <span className="button button-ghost">
                <ExternalAction
                  href={siteConfig.links.github.href}
                  label="GitHub"
                >
                  GitHub <Icon name="github" size={16} />
                </ExternalAction>
              </span>
            </div>
            <div className="hero-links">
              <ExternalAction
                href={siteConfig.links.linkedin.href}
                label="LinkedIn"
              >
                LinkedIn <Icon name="external" size={13} />
              </ExternalAction>
              <ExternalAction
                href={siteConfig.links.resume.href}
                label="Resume"
              >
                Resume <Icon name="external" size={13} />
              </ExternalAction>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-terminal" delay={120}>
          <TerminalWindow />
        </Reveal>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <i />
      </div>
    </section>
  );
}

function TerminalWindow() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dots">
          <i />
          <i />
          <i />
        </span>
        <span>aarish@devbox: ~</span>
        <span className="terminal-lock">⌁ 01</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line muted">
          {"// a small snapshot of what I&apos;m building"}
        </div>
        <p>
          <b>$</b> whoami
        </p>
        <div className="terminal-output">
          aarish <span className="cyan">/</span> developer
        </div>
        <p>
          <b>$</b> focus
        </p>
        <div className="terminal-output">
          <span className="cyan">backend</span> + cloud + ai
        </div>
        <p>
          <b>$</b> status
        </p>
        <div className="terminal-output status-output">
          <span className="status-indicator" /> building
          <span className="typing-cursor" />
        </div>
        <div className="terminal-separator" />
        <div className="terminal-meta">
          <span>runtime</span>
          <strong>curious</strong>
          <span>location</span>
          <strong>India</strong>
          <span>mode</span>
          <strong className="cyan">ship / learn</strong>
        </div>
      </div>
    </div>
  );
}
