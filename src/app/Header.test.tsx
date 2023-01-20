import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";

describe("Header", () => {
  test("renders company link", () => {
    render(<Header />);

    expect(screen.getByText("Bare Metal Software")).toBeInTheDocument();
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
});
