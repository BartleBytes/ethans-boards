import { ContactSection } from "@/components/sections/contact";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HeroSection } from "@/components/sections/hero";
import { SellingPoints } from "@/components/sections/selling-points";

export default function Home() {
  return (
    <div className="space-y-4 pb-20">
      <HeroSection />
      <SellingPoints />
      <FeaturedProducts />
      <ContactSection />
    </div>
  );
}
