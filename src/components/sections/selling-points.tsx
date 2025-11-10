import { sellingPoints } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export function SellingPoints() {
  return (
    <section id="process" className="container py-16 space-y-10">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Lorem ipsum dolor
        </p>
        <h2 className="text-3xl font-semibold">Curabitur aliquet lorem sed arcu</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          ligula lorem nec ipsum gravida.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sellingPoints.map((point) => (
          <Card key={point.title} className="bg-secondary/30">
            <CardContent className="space-y-2 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {point.title}
              </p>
              <p className="text-base text-muted-foreground">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
