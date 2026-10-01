import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { skillGroups } from "@/lib/site";

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section section section-grid">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="The toolkit"
          title="Tools for the work."
          description="A growing toolkit across application code, infrastructure, and intelligent systems."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              className={`skill-group skill-${index + 1}`}
              delay={index * 40}
            >
              <div className="skill-heading">
                <span>0{index + 1}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="skills-note">
          <span>↳</span> Not claiming expertise — just documenting what I&apos;m
          learning and building with.
        </p>
      </div>
    </section>
  );
}
