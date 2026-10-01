import { PageIntro } from "@/components/ui/page-intro";

export default function NotFound() {
  return (
    <main>
      <PageIntro
        eyebrow="Not found"
        title="This page does not exist."
        description="The portfolio routes are ready to be populated after the design specification is provided."
      />
    </main>
  );
}
