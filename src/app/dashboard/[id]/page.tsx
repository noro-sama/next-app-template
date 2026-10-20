import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DashboardDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: DashboardDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return { title: `Dashboard ${id}` };
}

export default async function DashboardDetailPage({
  params,
}: DashboardDetailPageProps) {
  const { id } = await params;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-600">Dashboard</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
            Welcome to your workspace
          </h1>
          <p className="mt-2 text-slate-600">
            This is the dynamic route example for workspace{" "}
            <span className="font-medium text-slate-800">{id}</span>.
          </p>
        </div>
        <Badge variant="success">All systems normal</Badge>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Active projects", value: "08", detail: "+2 this month" },
          { label: "Tasks completed", value: "124", detail: "+18 this week" },
          {
            label: "Workspace status",
            value: "Active",
            detail: "Ready for your first project",
          },
        ].map((stat) => (
          <article
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            key={stat.label}
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-emerald-700">{stat.detail}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-950">
          Your starter workspace is ready
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Add a service for each domain, keep route files focused on rendering,
          and compose the UI from small Tailwind components. The sidebar and
          mobile navigation are ready for your routes.
        </p>
        <Button className="mt-5" size="sm" type="button" variant="secondary">
          Create a project
        </Button>
      </section>
    </div>
  );
}
