type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section aria-labelledby="page-intro-title">
      <p>{eyebrow}</p>
      <h1 id="page-intro-title">{title}</h1>
      <p>{description}</p>
    </section>
  );
}
