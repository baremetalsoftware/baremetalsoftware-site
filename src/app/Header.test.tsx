import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";

describe("Header", () => {
  test("renders company link", () => {
    render(<Header />);

    expect(screen.getByLabelText("Bare Metal Software Limited")).toHaveAttribute("href", "/");
  });

  test("hides navigation on mobile and shows it on desktop by default", () => {
    render(<Header />);

    expect(screen.getByRole("navigation")).toHaveClass("max-lg:hidden");
  });

  test("hides menu button on desktop", () => {
    render(<Header />);

    expect(screen.getByRole("menu")).toHaveClass("lg:invisible");
  });

  test("opens and closes navigation list when clicking on the menu button", async () => {
    render(<Header />);

    await userEvent.click(screen.getByRole("menu"));

    expect(screen.getByRole("navigation")).toHaveClass("visible");

    await userEvent.click(screen.getByRole("menu"));

    expect(screen.getByRole("navigation")).not.toHaveClass("visible");
  });

  test("closes navigation list when clicking on a menu item", async () => {
    render(<Header />);

    await userEvent.click(screen.getByRole("menu"));
    await userEvent.click(screen.getAllByRole("menuitem")[0]);

    expect(screen.getByRole("navigation")).not.toHaveClass("visible");
  });
});
