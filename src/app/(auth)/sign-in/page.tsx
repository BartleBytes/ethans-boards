import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Account portal
        </p>
        <h1 className="text-3xl font-semibold">Auth flows arrive next.</h1>
        <p className="text-muted-foreground">
          Wire up OAuth providers or credentials-based auth in
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">src/lib/auth/options.ts</code>
          and update this route with your final UI.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
