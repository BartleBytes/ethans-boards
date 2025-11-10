import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 15, 15, 0.75), rgba(15, 15, 15, 0.85)), url('/assets/wood.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        filter: "contrast(1.05) saturate(0.9)",
      }}
    >
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Lorem ipsum dolor
          </p>
          <h2 className="text-3xl font-semibold">Praesent sed lorem lectus.</h2>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
            arcu urna. Non accipimus commissiones aut special orders; solum series
            paratae in parvis editionibus emi possunt.
          </p>
        </div>
        <Card className="bg-white/90 text-[#1f2b24] shadow-xl">
          <CardContent className="p-8 text-[#1f2b24]">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
