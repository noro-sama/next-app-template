"use client";

import { Button } from "@/components/ui/Button";

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardDetailError({
  error,
  reset,
}: DashboardErrorProps) {
  return (
    <section className="rounded-xl border border-rose-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-950">
        This workspace could not be loaded.
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        {error.message || "An unexpected error occurred."}
      </p>
      <Button className="mt-5" onClick={reset} type="button">
        Try again
      </Button>
    </section>
  );
}
