import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";

describe("Header", () => {
  test("renders company link", () => {
    render(<Header />);

    const companyLogoLink = screen.getByLabelText("Company Logo Link");
    expect(companyLogoLink).toHaveAttribute("href", "/");
    expect(within(companyLogoLink).getByRole("img")).toHaveAttribute("src", "company-logo.svg");
  });

  test("hides navigation on mobile and shows it on desktop by default", () => {
    render(<Header />);

    expect(screen.getByRole("navigation")).toHaveClass("max-lg:invisible");
  });

  test("hides menu button on desktop", () => {
    render(<Header />);

    expect(screen.getByRole("menu")).toHaveClass("lg:invisible");
  });

  test("opens navigation list when clicking on the menu button", async () => {
    render(<Header />);

    await userEvent.click(screen.getByRole("menu"));

    expect(screen.getByRole("navigation")).toHaveClass("visible");
  });

  test("changes the logo to white when clicking on the menu button", async () => {
    render(<Header />);

    await userEvent.click(screen.getByRole("menu"));

    expect(within(screen.getByLabelText("Company Logo Link")).getByRole("img")).toHaveAttribute(
      "src",
      "company-logo-white.svg"
    );
  });
});
