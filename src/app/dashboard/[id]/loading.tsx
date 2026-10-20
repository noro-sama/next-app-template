import { Spinner } from "@/components/ui/Spinner";

export default function DashboardDetailLoading() {
  return (
    <div
      aria-label="Loading dashboard"
      className="flex min-h-64 items-center justify-center"
      role="status"
    >
      <Spinner className="size-6 text-indigo-600" />
    </div>
  );
}
