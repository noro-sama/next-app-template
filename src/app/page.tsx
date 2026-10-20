import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { routes } from "@/constants/routes";

const features = [
  {
    number: "01",
    title: "A practical foundation",
    description:
      "App Router, TypeScript, Tailwind, typed API helpers, and a small Zustand store are ready to use.",
  },
  {
    number: "02",
    title: "Forms that scale",
    description:
      "Reusable React Hook Form fields connect to Zod schemas with accessible inline validation.",
  },
  {
    number: "03",
    title: "UI without lock-in",
    description:
      "Keep control of your interface with simple responsive components and no component library.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="landing-glow relative isolate overflow-hidden">
          <div aria-hidden="true" className="landing-grid absolute inset-0 -z-10" />
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6" variant="info">
                Next.js 16 · TypeScript · Tailwind CSS
              </Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Start with the essentials.
                <span className="block text-indigo-600">Build what matters.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
                A clean, practical starter for your next app. Reusable UI,
                validated forms, typed API calls, and a working dashboard example
                — without extra framework baggage.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-base font-medium text-white shadow-sm transition hover:bg-indigo-500"
                  href={routes.login}
                >
                  Explore the starter
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-base font-medium text-slate-700 transition hover:bg-slate-50"
                  href="#features"
                >
                  See what’s included
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Demo login: any email and a password with at least 8 characters.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl shadow-indigo-950/5 sm:mt-20">
              <div className="rounded-xl bg-slate-950 p-5 text-left sm:p-8">
                <div className="mb-8 flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 font-mono text-xs text-slate-400">
                    src/
                  </span>
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-7 text-slate-300 sm:text-sm">
                  <code>
                    <span className="text-indigo-300">app/</span>
                    {"                 "}routes and layouts{"\n"}
                    <span className="text-indigo-300">components/</span>
                    {"          "}UI, layout, and forms{"\n"}
                    <span className="text-indigo-300">lib/api/</span>
                    {"              "}typed fetch client{"\n"}
                    <span className="text-indigo-300">services/</span>
                    {"             "}domain operations{"\n"}
                    <span className="text-indigo-300">store/</span>
                    {"                 "}small Zustand stores
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
          id="features"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              The starter kit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              A thoughtful base, not another framework.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-2xl border border-slate-200 bg-white p-6"
                key={feature.number}
              >
                <p className="font-mono text-sm text-indigo-600">
                  {feature.number}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
