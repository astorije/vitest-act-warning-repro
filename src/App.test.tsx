import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("<App />", () => {
  it("tests the app", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
