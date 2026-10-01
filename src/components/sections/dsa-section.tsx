import { SectionHeading } from "@/components/sections/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ExternalAction } from "@/components/ui/external-action";
import { siteConfig } from "@/lib/site";

export function DsaSection() {
  return (
    <section id="dsa" className="dsa-section section">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="The practice loop"
          title="Small problems. Better systems."
          description="I regularly practice data structures and algorithms on LeetCode, using GitHub / LeetHub to keep the learning visible."
        />
        <div className="dsa-grid">
          <Reveal className="contribution-card">
            <div className="contribution-top">
              <span>activity / 2025</span>
              <span>practice_log</span>
            </div>
            <div className="contribution-grid">
              {Array.from({ length: 91 }, (_, index) => (
                <i
                  key={index}
                  className={`level-${(index * 7 + (index % 5)) % 5}`}
                />
              ))}
            </div>
            <div className="contribution-bottom">
              <span>less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <i key={level} className={`level-${level}`} />
              ))}
              <span>more</span>
            </div>
            <div className="contribution-mark">
              DSA<span>_</span>
            </div>
          </Reveal>
          <Reveal className="dsa-copy" delay={120}>
            <div className="dsa-stat">
              <span>focus</span>
              <strong>
                Data Structures
                <br />
                <em>& Algorithms</em>
              </strong>
            </div>
            <p>
              Every problem is a small exercise in clarity, tradeoffs, and
              persistence. The goal is not a streak — it&apos;s building better
              instincts for the systems work around it.
            </p>
            <div className="dsa-links">
              <ExternalAction
                href={siteConfig.links.leetcode.href}
                label="LeetCode"
              >
                {siteConfig.links.leetcode.label}{" "}
                <Icon name="external" size={14} />
              </ExternalAction>
              <ExternalAction
                href={siteConfig.links.repository.href}
                label="LeetHub repository"
              >
                {siteConfig.links.repository.label}{" "}
                <Icon name="external" size={14} />
              </ExternalAction>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
