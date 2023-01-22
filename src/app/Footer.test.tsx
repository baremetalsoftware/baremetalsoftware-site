import { render, screen, within } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  test("renders contact us link", () => {
    render(<Footer />);

    expect(screen.getByText("Contact us")).toHaveAttribute("href", "/contact-us");
  });

  test("renders privacy policy link", () => {
    render(<Footer />);

    expect(screen.getByText("Privacy Policy")).toHaveAttribute("href", "/privacy-policy");
  });

  test("renders cookies policy link", () => {
    render(<Footer />);

    expect(screen.getByText("Cookies Policy")).toHaveAttribute("href", "/cookies-policy");
  });

  test("renders company link", () => {
    render(<Footer />);

    expect(screen.getByText("© Bare Metal Software")).toHaveAttribute("href", "/");
  });

  test("renders media link", () => {
    render(<Footer />);

    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com/baremetalsoftware");
    expect(within(githubLink).getByRole("img")).toHaveAttribute("src", "github-mark-white.svg");
  });
});
