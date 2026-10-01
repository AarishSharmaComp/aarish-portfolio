import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const interests = [
  "Backend Engineering",
  "Full-Stack Development",
  "Cloud / AWS",
  "DevOps",
  "AI-powered applications",
  "System design",
];

export function AboutSection() {
  return (
    <section id="about" className="about-section section">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="The person behind the code"
          title="Curious by default."
          description="I like understanding how things work, then building the version that makes them more useful."
        />
        <div className="about-grid">
          <Reveal className="about-statement">
            <span className="quote-mark">“</span>
            <p>
              I&apos;m Aarish, a B.Tech CSE student interested in the systems
              behind the interface — reliable APIs, cloud infrastructure,
              intelligent workflows, and products that solve real problems.
            </p>
            <span className="about-caption">
              A developer in progress, deliberately.
            </span>
          </Reveal>
          <Reveal className="interest-panel" delay={100}>
            <div className="panel-label">
              <span>Currently exploring</span>
              <span>~/ interests</span>
            </div>
            <div className="interest-list">
              {interests.map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <i>↗</i>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
