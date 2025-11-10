import Image from "next/image";

import { featuredBoards } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedProducts() {
  return (
    <section id="featured" className="container space-y-8 py-16">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Lorem ipsum dolor
        </p>
        <h2 className="text-3xl font-semibold">Praesent sed lorem lectus</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          cursus lorem. Donec blandit auctor lorem sed pulvinar.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredBoards.map((board) => (
          <Card key={board.id} className="flex flex-col">
            <CardHeader className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={board.image}
                  alt={board.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Badge className="w-fit">{board.badge}</Badge>
              <CardTitle>{board.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{board.description}</p>
            </CardHeader>
            <CardContent className="mt-auto space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">${board.price}</span> ·
                {" "}
                {board.dimensions}
              </p>
              <p>Species · {board.wood}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
