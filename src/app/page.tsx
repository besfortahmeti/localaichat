import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <main className="max-w-md w-full space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Project Setup</h1>
          <ModeToggle />
        </div>

        <section className="space-y-4">
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Ready to Build</h2>
            <p className="text-muted-foreground">
              Shadcn UI, TanStack Query, and Axios have been successfully
              installed and configured.
            </p>
            <div className="flex gap-2">
              <Button>Shadcn Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground">
          Built with Next.js, Shadcn UI, TanStack Query, and Axios.
        </footer>
      </main>
    </div>
  );
}
