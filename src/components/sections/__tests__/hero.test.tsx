import { render, screen } from "@testing-library/react";

import { HeroSection } from "@/components/sections/hero";

describe("HeroSection", () => {
  it("renders stats and ctas", () => {
    render(<HeroSection />);

    expect(
      screen.getByText(/it's time to start your adventures/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /more info/i })).toBeInTheDocument();
    expect(screen.getByText(/non accipimus commissiones/i)).toBeInTheDocument();
  });
});
