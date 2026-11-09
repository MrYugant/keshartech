"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section role="alert" className="flex min-h-[80svh] items-center bg-bg pt-[var(--header-h)]">
      <div className="shell py-20">
        <Eyebrow>Something went wrong</Eyebrow>
        <h1 className="mt-8 max-w-3xl text-h1 text-fg">We hit an unexpected problem.</h1>
        <p className="mt-6 max-w-xl text-lead text-fg-muted">Please try again. If the problem continues, contact us and we&apos;ll look into it.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button onClick={reset} size="lg">
            Try again
          </Button>
          <ButtonLink href="/" size="lg" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
